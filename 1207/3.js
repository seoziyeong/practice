var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]

document.write(foods.length,"<br>");

for (i in foods) {
    if (i%2 == 0) { 
        document.write(foods[i],"<br>");
    }
}