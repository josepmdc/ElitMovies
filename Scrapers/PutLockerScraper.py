import re
import requests
import json
from bs4 import BeautifulSoup


class PutLockerScraper:

    print()
    print("Vamos a encontrar tu episodio!")
    print("Si algun link no funciona prueba con otro")
    print()

    serie = input("Serie: ").lower()
    # temporada = input("Temporada: ")
    # capitulo = input("Capitulo: ")

    print("------------------")
    print("-- putlocker.kz --")
    print("------------------")

    # Variables necesarias para hacer la petición de búsqueda
    url = "https://putlocker.kz/search?keyword=" + serie  # url de la petición post
    getPostsURL = "https://putlocker.kz/get-links/" # url para obtener los links

    # Peticion de búsqueda
    resultadosBusqueda = requests.post(url).content
    soup = BeautifulSoup(resultadosBusqueda, "html.parser")

    # Búscamos el enlace del primer resultado
    srcSerie = soup.find("a", attrs={"class": "ml-mask"})["href"]

    # Obtenemos el HTML de la serie
    page = requests.get(srcSerie)

    # Buscamos las variables para hacer la peticion getLinks()
    soup = BeautifulSoup(page.content, "html.parser")
    scripts = str(soup.find_all("script"))

    # Buscamos la variable id
    movie_id = re.compile("var id = (.*?);")
    buscador = movie_id.search(scripts)
    # Cogemos el primer resultado y le quitamos las comillas
    movie_id = str(buscador.groups()[0].replace("'", ""))

    # Repetimos el mismo paso con la variable e
    e = re.compile("var e = (.*?);")
    buscador = e.search(scripts)
    e = str(buscador.groups()[0].replace("'", ""))

    # Parametros necesarios para la peticion
    body = {"id": movie_id, "e": e}
    enlaces = requests.post(getPostsURL, data=body).content  # .replace("[", "").replace("]", "")

    enlaces = json.loads(enlaces)
    for enlace in enlaces:
        print(enlace['src'])
