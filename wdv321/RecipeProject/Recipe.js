//Filipino spaghetti image: https://salu-salo.com/wp-content/uploads/2017/02/Filipino-Spaghetti-5.jpg
//Slow-cooker chili image: https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2017/02/Slow-Cooker-Double-Beef-and-Bean-Chili-144.jpg
//Chocolate chip cookies image: https://www.littlesweetbaker.com/wp-content/uploads/2014/05/best-chocolate-chip-cookies-3.jpg

$(document).ready(function () {
    $("#servingSize").keyup(function () {
        $("#ingredientList").html("");
        servingSize = $("#servingSize").val();
        var recipeName = getParameterByName("recipeName");
        var recipe = recipes[recipeName];
        recipe.ingredients.forEach(showRecipeIngredients);
    })
});

var recipes = {
    crockPotChili: {
        recipeName: "Crock-Pot Chili",
        servingSize: 6,
        servingSizeComments: "",
        prepTimeInMinutes: 25,
        cookTimeInMinutes: 360,
        difficultyLevel: 1,
        imageSource: "images/Slow-Cooker-Double-Beef-and-Bean-Chili-144.jpeg",
        ingredients: [
            {
                description: "cooking oil",
                unitOfMeasure: "tsp",
                amount: 1
            },
            {
                description: "chopped onion",
                unitOfMeasure: "tbsp",
                amount: 8 / 3
            },
            {
                description: "chopped peppers",
                unitOfMeasure: "tbsp",
                amount: 8 / 3
            },
            {
                description: "chili powder",
                unitOfMeasure: "tsp",
                amount: 2
            },
            {
                description: "hot chili powder (optional)",
                unitOfMeasure: "tsp",
                amount: 1 / 6
            },
            {
                description: "ground beef or chicken",
                unitOfMeasure: "lb",
                amount: 1 / 6
            },
            {
                description: "can of red beans",
                unitOfMeasure: "",
                amount: 1 / 3
            },
            {
                description: "can of kidney beans",
                unitOfMeasure: "",
                amount: 1 / 3
            },
            {
                description: "can of tomato puree",
                unitOfMeasure: "",
                amount: 1 / 3
            },
            {
                description: "can of tomato sauce",
                unitOfMeasure: "",
                amount: 1 / 3
            },
            {
                description: "shredded cheese",
                unitOfMeasure: "tbsp",
                amount: 8 / 3
            },
            {
                description: "sour cream",
                unitOfMeasure: "tsp",
                amount: 4
            }
        ]
    },

    filipinoSpaghetti: {
        recipeName: "Filipino Spaghetti",
        servingSize: 8,
        servingSizeComments: "",
        prepTimeInMinutes: 15,
        cookTimeInMinutes: 70,
        difficultyLevel: 3,
        imageSource: "images/Filipino-Spaghetti-5.jpg",
        ingredients: [
            {
                description: "uncooked spaghetti",
                unitOfMeasure: "lb",
                amount: 1 / 8
            },
            {
                description: "oil",
                unitOfMeasure: "tbsp",
                amount: 1 / 8
            },
            {
                description: "Filipino-style hotdog",
                unitOfMeasure: "",
                amount: 1 / 2
            },
            {
                description: "medium onion",
                unitOfMeasure: "",
                amount: 1 / 8
            },
            {
                description: "cloves of garlic",
                unitOfMeasure: "",
                amount: 3 / 8
            },
            {
                description: "ground beef",
                unitOfMeasure: "lb",
                amount: 1 / 8
            },
            {
                description: "tomato sauce",
                unitOfMeasure: "cup",
                amount: 1 / 4
            },
            {
                description: "tomato paste",
                unitOfMeasure: "tbsp",
                amount: 1
            },
            {
                description: "banana catsup",
                unitOfMeasure: "tbsp",
                amount: 2
            },
            {
                description: "beef broth",
                unitOfMeasure: "tbsp",
                amount: 2
            },
            {
                description: "sugar",
                unitOfMeasure: "tsp",
                amount: 1 / 8
            }
        ]
    },

    chocolateChipCookies: {
        recipeName: "Chocolate Chip Cookies",
        servingSize: 3,
        servingSizeComments: "1 serving size is equal to 6 cookies",
        prepTimeInMinutes: 10,
        cookTimeInMinutes: 15,
        difficultyLevel: 2,
        imageSource: "images/best-chocolate-chip-cookies-3.jpg",
        ingredients: [
            {
                description: "all-purpose flour",
                unitOfMeasure: "cup",
                amount: 2 / 3
            },
            {
                description: "baking soda",
                unitOfMeasure: "tsp",
                amount: 1 / 6
            },
            {
                description: "salt",
                unitOfMeasure: "tsp",
                amount: 1 / 6
            },
            {
                description: "melted,unsalted butter",
                unitOfMeasure: "cup",
                amount: 1 / 4
            },
            {
                description: "packed brown sugar",
                unitOfMeasure: "cup",
                amount: 1 / 3
            },
            {
                description: "white sugar",
                unitOfMeasure: "tbsp",
                amount: 8 / 3
            },
            {
                description: "vanilla extract",
                unitOfMeasure: "tsp",
                amount: 1
            },
            {
                description: "egg",
                unitOfMeasure: "",
                amount: 1 / 3
            },
            {
                description: "egg yolk",
                unitOfMeasure: "",
                amount: 1 / 3
            },
            {
                description: "semi-sweet chocolate chips",
                unitOfMeasure: "cup",
                amount: 2 / 3
            }
        ]
    }
};

function showRecipeInfo() {
    var recipeName = getParameterByName("recipeName");
    var recipe = recipes[recipeName];
    servingSize = getServingSize(recipe);
    $("#recipeName").html(recipe.recipeName);
    $("#servingSize").val(servingSize);
    $("#servingSizeComments").html(recipe.servingSizeComments);
    $("#prepTimeInMinutes").html(convertMinutesToHours(recipe.prepTimeInMinutes));
    $("#cookTimeInMinutes").html(convertMinutesToHours(recipe.cookTimeInMinutes));
    $("#difficultyLevel").html(recipe.difficultyLevel);
    $("#foodPicture").attr('src', recipe.imageSource);

    recipe.ingredients.forEach(showRecipeIngredients);
}

function showRecipeIngredients(ingredient) {
    $("#ingredientList").append("<li>");

    var ingredientAmount = convertToFraction(ingredient.amount * servingSize);


    if (ingredient.unitOfMeasure === "") {
        $("#ingredientList").append(ingredientAmount);
    }
    else if (ingredient.unitOfMeasure === "lb") {
        $("#ingredientList").append(ingredientAmount + " " + ingredient.unitOfMeasure);
    }
    else if (ingredient.unitOfMeasure === "cup") {
        $("#ingredientList").append(ingredientAmount + " " + ingredient.unitOfMeasure);
    }
    else if (ingredient.unitOfMeasure === "tbsp") {
        $("#ingredientList").append(convertTbspToCups(ingredient.amount * servingSize));
    }
    else if (ingredient.unitOfMeasure === "tsp") {
        $("#ingredientList").append(convertTspToTbsp(ingredient.amount * servingSize));
    }
    else {
        console.log("Not accepted ingredient unit of measure");
    }
    $("#ingredientList").append(" " + ingredient.description + "</li>");
}


function showRecipeInstructions() {

}

function getServingSize(recipeName) {
    if ($("#servingSize").val() === "") {
        servingSize = recipeName.servingSize;
        console.log("default serving size: " + servingSize);
    }
    else {
        servingSize = $("#servingSize").val();
        console.log("serving size: " + servingSize);
    }
    return servingSize;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

///////////////////////Conversion functions/////////////////////////
function convertMinutesToHours(time) {
    var hours = time / 60;
    var minutes = time % 60;
    var formattedTime = "";
    if (hours < 1) {
        formattedTime = minutes + " minutes";
        return formattedTime;
    }
    else if (minutes === 0) {
        formattedTime = hours + " hours";
        return formattedTime;
    }
    else {
        hours = Math.floor(hours);
        formattedTime = hours + " hours " + minutes + " minutes";
        return formattedTime;
    }
}

function convertTspToTbsp(amount) {
    var tbsp = amount / 3;
    var tsp = amount % 3;
    var formattedAmount = "";
    if (tbsp < 1) {
        formattedAmount = convertToFraction(tsp) + " tsp";
        return formattedAmount;
    }
    else if (tsp === 0) {
        formattedAmount = convertToFraction(tbsp) + " tbsp";
        return formattedAmount;
    }
    else {
        tbsp = Math.floor(tbsp);
        formattedAmount = convertToFraction(tbsp) + " tbsp " + convertToFraction(tsp) + " tsp";
        return formattedAmount;
    }
}


function convertTbspToCups(amount) {
    var cups = amount / 16;
    var tbsp = amount % 16;
    var formattedAmount = "";
    if (cups < 1) {
        if (tbsp % 8 === 0 || cups === 1 / 2) {
            formattedAmount = "1/2 cup";
            return formattedAmount;
        }
        else if (tbsp % 4 === 0 || cups === 1 / 4) {
            formattedAmount = "1/4 cup";
            return formattedAmount;
        }
        else {
            formattedAmount = convertToFraction(tbsp) + " tbsp";
            return formattedAmount;
        }
    }
    else if (tbsp === 0) {
        formattedAmount = convertToFraction(cups) + " cup";
        return formattedAmount;
    }
    else {
        cups = Math.floor(cups);
        formattedAmount = convertToFraction(cups) + " cup " + convertToFraction(tbsp) + " tbsp";
        return formattedAmount;
    }
}

function convertToFraction(x) {
    var tolerance = 1.0E-6;
    var h1 = 1;
    var h2 = 0;
    var k1 = 0;
    var k2 = 1;
    var b = x;
    do {
        var a = Math.floor(b);
        var aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(x - h1 / k1) > x * tolerance);

    if (k1 === 1) {
        return h1;
    }
    else {
        return h1 + "/" + k1;
    }
}












