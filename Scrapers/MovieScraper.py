from bs4 import BeautifulSoup
import requests
import sys


class MovieScraper:

    print()
    print("Vamos a encontrar tu episodio!")
    print("Si algun link no funciona prueba con otro")
    print()

    peli = input("Peli: ").lower()
    peliIngles = input("Ingles: ").lower()

    print("------------------------")
    print("------- yape.nu --------")
    print("------------------------")

    peli = peli.replace(" ", "-")
    peliIngles = peliIngles.replace(" ", "-")

    url = "https://www.yape.nu/" + peli + "-" + peliIngles + "/"
    print(url)
    try:
        page = requests.get(url)
        soup = BeautifulSoup(page.text, "html.parser")
    except:
        print("Error: No se puede encontrar la serie o capitulo")
        sys.exit()

    episodio = str(soup.find_all("div", attrs={"id": "watch"}))
    soup = BeautifulSoup(episodio, "html.parser")

    enlaces = []

    for enlace in soup.find_all("a", attrs={"data-link": True}):
        enlaces.append(enlace["data-link"])
        print(enlace["data-link"])
