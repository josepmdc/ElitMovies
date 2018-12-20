from bs4 import BeautifulSoup
import requests
import sys


class SeriesScraper:

    print()
    print("Vamos a encontrar tu episodio!")
    print("Si algun link no funciona prueba con otro")
    print()

    serie = input("Serie: ").lower()
    temporada = input("Temporada: ")
    capitulo = input("Capitulo: ")

    print("-------------------------")
    print("-- wikiseriesonline.nu --")
    print("-------------------------")

    # Variables necesarias para hacer la petición de búsqueda
    url = "http://www.wikiseriesonline.nu/wp-content/themes/wikiSeries/searchajaxresponse.php"  # url de la petición post
    body = {'n': serie}  # nombre de la serie que queremos búscar

    # Peticion de búsqueda
    try:
        resultadosBusqueda = requests.post(url, data=body).content
        soup = BeautifulSoup(resultadosBusqueda, "html.parser")

        # Búscamos el enlace del primer resultado
        srcSerie = soup.find("a")["href"]

        # Obtenemos el HTML de la serie
        page = requests.get(srcSerie)

    except:
        print("Error: No se pudo encontrar la serie")
        sys.exit()

    # Parseamos la lista de episodios y elegimos el episodio 1 de la primera temporada
    soup = BeautifulSoup(page.text, "html.parser")
    episodio = str(soup.find("li", attrs={"id": "s" + temporada + "e" + capitulo}))

    # Parseamos el li del episodio para encontrar el link
    try:
        soup = BeautifulSoup(episodio, "html.parser")
        srcEpisodio = soup.find("a")["href"]
        # Obtenemos el HTML del episodio
        pageEpisodio = requests.get(srcEpisodio)

    except:
        print("Error: Esta temporada o episodio no esta disponible")
        sys.exit()

    try:
        # Obtenemos la tabla con todos los enlaces
        soup = BeautifulSoup(pageEpisodio.text, "html.parser")
        tablaEnlaces = str(soup.find("tbody"))
        # Obtenemos los enlaces
        soup = BeautifulSoup(tablaEnlaces, "html.parser")
        # Para cada registro en la tabla que tenga un data-link(atributo que contiene el enlace) nos da el data-link
        enlaces = []
        for enlace in soup.find_all("tr", attrs={"data-link": True}):
            enlaces.append(enlace["data-link"])
            print(enlace["data-link"])
    except:
        print("Error: No hay enlaces disponibles")
        sys.exit()


    print("------------------------")
    print("------- dilo.nu --------")
    print("------------------------")

    serie = serie.replace(" ", "-")
    print(serie)

    # El formato de capitulos de esta web es diferente. Si el capitulo es de un digito lleva un 0 delante
    if capitulo.__len__() < 2:
        capitulo = "0" + capitulo

    url = "https://www.dilo.nu/" + serie + "-" + temporada + "x" + capitulo + "/"
    try:
        page = requests.get(url)
        soup = BeautifulSoup(page.text, "html.parser")
    except:
        print("Error: No se puede encontrar la serie o capitulo")
        sys.exit()

    episodio = str(soup.find_all("div", attrs={"id": "watch"}))
    soup = BeautifulSoup(episodio, "html.parser")
    for enlace in soup.find_all("a", attrs={"data-link": True}):
        enlaces.append(enlace["data-link"])
        print(enlace["data-link"])




