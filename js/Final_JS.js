const baseUrl = "https://localhost:7036/api/";

const DropDownDogType = [
    {
        "Img": "./Img/Dogs/1.png",
        "DogName": "Pomeranian",
        "id": "Dog1",
    },
    {
        "Img": "./Img/Dogs/2.png",
        "DogName": "Border Collie",
        "id": "Dog2",
    },
    {
        "Img": "./Img/Dogs/3.png",
        "DogName": "Beagle",
        "id": "Dog3",
    },
    {
        "Img": "./Img/Dogs/4.png",
        "DogName": "Shih Tzu",
        "id": "Dog4",
    },
    {
        "Img": "./Img/Dogs/5.png",
        "DogName": "Toy Poodle",
        "id": "Dog5",
    },
    {
        "Img": "./Img/Dogs/6.png",
        "DogName": "Pug",
        "id": "Dog6",
    },
    {
        "Img": "./Img/Dogs/7.png",
        "DogName": "Dachshund",
        "id": "Dog7",
    },
    {
        "Img": "./Img/Dogs/8.png",
        "DogName": "French Bulldog",
        "id": "Dog8",
    }, {
        "Img": "./Img/Dogs/9.png",
        "DogName": "Golden Retriver",
        "id": "Dog9",
    }
];

/*שמירה של השאלות משחקת לאחר שליפה - מכיל בהתחלה משחק דיפולטיבי*/
let GameData = {
    "allQuestions": [
        {
            "question": "What is the recommended diet for a Labrador?",
            "answers": [
                { "answerText": "Raw meat only", "isRight": false },
                { "answerText": "Balanced dog food", "isRight": true }
            ]
        },
        {
            "question": "How often should Labradors be exercised?",
            "answers": [
                { "answerText": "Twice a month", "isRight": false },
                { "answerText": "Daily", "isRight": true }
            ]
        },
        {
            "question": "Which grooming task is important for Labradors?",
            "answers": [
                { "answerText": "Trimming nails", "isRight": true },
                { "answerText": "Skipping baths", "isRight": false }
            ]
        },
        {
            "question": "What health issue is common in Labradors?",
            "answers": [
                { "answerText": "Hip dysplasia", "isRight": true },
                { "answerText": "Perfect health always", "isRight": false }
            ]
        },
        {
            "question": "How should Labradors be trained?",
            "answers": [
                { "answerText": "Harsh punishment only", "isRight": false },
                { "answerText": "Positive reinforcement", "isRight": true },
                { "answerText": "No training needed", "isRight": false },
                { "answerText": "Ignoring bad behavior", "isRight": false }
            ]
        }
    ]
};


let allOptionQeustions=[
    {
        quizData:{
        "allQuestions": [
            {
                "question": "Where did the Pomeranian breed originate from?",
                "answers": [
                    {"answerText": "Germany", "isRight": true},
                    {"answerText": "France", "isRight": false},
                    {"answerText": "Italy", "isRight": false}
                ]
            },
            {
                "question": "What was the original purpose of Pomeranians?",
                "answers": [
                    {"answerText": "Hunting dogs", "isRight": false},
                    {"answerText": "Sled dogs", "isRight": false},
                    {"answerText": "Herding dogs", "isRight": false},
                    {"answerText": "Working as sled dogs", "isRight": true}
                ]
            },
            {
                "question": "Which famous historical figure owned a Pomeranian?",
                "answers": [
                    {"answerText": "Queen Victoria", "isRight": true},
                    {"answerText": "Napoleon Bonaparte", "isRight": false},
                    {"answerText": "Cleopatra", "isRight": false}
                ]
            },
            {
                "question": "What is the average lifespan of a Pomeranian?",
                "answers": [
                    {"answerText": "8-10 years", "isRight": false},
                    {"answerText": "12-16 years", "isRight": true},
                    {"answerText": "20-25 years", "isRight": false}
                ]
            },
            {
                "question": "What is the size classification of Pomeranians?",
                "answers": [
                    {"answerText": "Large breed", "isRight": false},
                    {"answerText": "Medium breed", "isRight": false},
                    {"answerText": "Small breed", "isRight": true}
                ]
            }
        ]
    },
    selction:[
        {
            searchValue:"History",
            elementName: "Subject"
        },
        {
            searchValue:"high school",
            elementName: "Education"
        },
        {
            searchValue:"Pomeranian",
            elementName: "DogTypeOptions"
        }
    ]
    },
    {
        quizData:{ "allQuestions": [ { "question": "What is a key aspect in training a Border Collie?", "answers": [ {"answerText": "Physical punishment", "isRight": false}, {"answerText": "Positive reinforcement", "isRight": true}, {"answerText": "Ignoring the dog", "isRight": false} ] }, { "question": "Which activity is suitable for a Border Collie?", "answers": [ {"answerText": "Sitting indoors all day", "isRight": false}, {"answerText": "Agility training", "isRight": true}, {"answerText": "Avoiding interaction", "isRight": false} ] }, { "question": "How should you handle Border Collie's high energy levels?", "answers": [ {"answerText": "Limit exercise to avoid overstimulation", "isRight": false}, {"answerText": "Provide plenty of physical and mental stimulation", "isRight": true}, {"answerText": "Keep the dog confined indoors", "isRight": false} ] }, { "question": "Which command is crucial for a Border Collie?", "answers": [ {"answerText": "Jump", "isRight": false}, {"answerText": "Come", "isRight": true}, {"answerText": "Sleep", "isRight": false}, {"answerText": "Shed", "isRight": false} ] }, { "question": "What is a common behavioral issue in Border Collies?", "answers": [ {"answerText": "Excessive barking", "isRight": true}, {"answerText": "Silent all the time", "isRight": false}, {"answerText": "Avoiding playtime", "isRight": false} ] } ] },
        selction:[
            {
                searchValue:"Traning",
                elementName: "Subject"
            },
            {
                searchValue:"middle school",
                elementName: "Education"
            },
            {
                searchValue:"Border Collie",
                elementName: "DogTypeOptions"
            }
        ]
    },
    {
        quizData:{ "allQuestions": [ { "question": "What is the recommended grooming frequency for a Shih Tzu?", "answers": [ {"answerText": "Monthly", "isRight": false}, {"answerText": "Weekly", "isRight": true}, {"answerText": "Every 3 months", "isRight": false} ] }, { "question": "Which type of food is suitable for a Shih Tzu?", "answers": [ {"answerText": "Raw meat only", "isRight": false}, {"answerText": "High-quality dog food", "isRight": true}, {"answerText": "Human chocolate", "isRight": false} ] }, { "question": "What is a common health issue in Shih Tzus?", "answers": [ {"answerText": "Hip dysplasia", "isRight": false}, {"answerText": "Patellar luxation", "isRight": true}, {"answerText": "Heartworms", "isRight": false} ] }, { "question": "How much exercise does a Shih Tzu typically require?", "answers": [ {"answerText": "Intense daily workouts", "isRight": false}, {"answerText": "Short walks and playtime", "isRight": true} ] }, { "question": "What is the temperament of a Shih Tzu?", "answers": [ {"answerText": "Aggressive", "isRight": false}, {"answerText": "Affectionate and alert", "isRight": true}, {"answerText": "Shy and timid", "isRight": false}, {"answerText": "Hyperactive", "isRight": false} ] } ] },
        selction:[
            {
                searchValue:"Care",
                elementName: "Subject"
            },
            {
                searchValue:"middle school",
                elementName: "Education"
            },
            {
                searchValue:"Shih Tzu",
                elementName: "DogTypeOptions"
            }
        ]
    },
    {
        quizData:{
            "allQuestions": [ { "question": "Where did the Dachshund breed originate from?", "answers": [ {"answerText": "France", "isRight": false}, {"answerText": "Germany", "isRight": true}, {"answerText": "Italy", "isRight": false} ] }, { "question": "What was the original purpose of Dachshunds?", "answers": [ {"answerText": "Hunting badgers", "isRight": true}, {"answerText": "Herding cattle", "isRight": false}, {"answerText": "Guarding castles", "isRight": false} ] }, { "question": "Which size varieties do Dachshunds come in?", "answers": [ {"answerText": "Small only", "isRight": false}, {"answerText": "Standard, Miniature, and Kaninchen", "isRight": true}, {"answerText": "Large only", "isRight": false} ] }, { "question": "What was the original name of Dachshunds?", "answers": [ {"answerText": "Badger Hound", "isRight": false}, {"answerText": "Teckel", "isRight": true}, {"answerText": "Wiener Dog", "isRight": false}, {"answerText": "Sausage Dog", "isRight": false} ] }, { "question": "Which coat types can Dachshunds have?", "answers": [ {"answerText": "Long-haired only", "isRight": false}, {"answerText": "Smooth, Long-haired, and Wire-haired", "isRight": true}, {"answerText": "Wire-haired only", "isRight": false} ] } ]
        },
        selction:[
            {
                searchValue:"History",
                elementName: "Subject"
            },
            {
                searchValue:"high school",
                elementName: "Education"
            },
            {
                searchValue:"Dachshund",
                elementName: "DogTypeOptions"
            }
        ]
    },
    {
        quizData:{
            "allQuestions": [
              {
                "question": "What is the recommended grooming frequency for a Toy Poodle?",
                "answers": [
                  {"answerText": "Once a month", "isRight": false},
                  {"answerText": "Every 4-6 weeks", "isRight": true},
                  {"answerText": "Twice a year", "isRight": false}
                ]
              },
              {
                "question": "Which type of exercise is suitable for a Toy Poodle?",
                "answers": [
                  {"answerText": "Intense running", "isRight": false},
                  {"answerText": "Short walks and indoor play", "isRight": true}
                ]
              },
              {
                "question": "What is a common health issue in Toy Poodles?",
                "answers": [
                  {"answerText": "Hip dysplasia", "isRight": false},
                  {"answerText": "Patellar luxation", "isRight": true},
                  {"answerText": "Heartworm", "isRight": false}
                ]
              },
              {
                "question": "Which of the following foods is suitable for Toy Poodles?",
                "answers": [
                  {"answerText": "Chocolate", "isRight": false},
                  {"answerText": "High-quality dog food", "isRight": true},
                  {"answerText": "Grapes", "isRight": false},
                  {"answerText": "Potatoes", "isRight": false}
                ]
              },
              {
                "question": "What is the temperament of Toy Poodles generally like?",
                "answers": [
                  {"answerText": "Aggressive", "isRight": false},
                  {"answerText": "Playful and intelligent", "isRight": true},
                  {"answerText": "Lazy", "isRight": false}
                ]
              }
            ]
          },
        selction:[
            {
                searchValue:"Care",
                elementName: "Subject"
            },
            {
                searchValue:"elementy school",
                elementName: "Education"
            },
            {
                searchValue:"Toy Poodle",
                elementName: "DogTypeOptions"
            }
        ]
    },
    {
        quizData: { "allQuestions": [ { "question": "Where did the French Bulldog breed originate?", "answers": [ {"answerText": "France", "isRight": true}, {"answerText": "Germany", "isRight": false}, {"answerText": "Italy", "isRight": false} ] }, { "question": "What was the original purpose of French Bulldogs?", "answers": [ {"answerText": "Hunting", "isRight": false}, {"answerText": "Companion dogs", "isRight": true} ] }, { "question": "Which of the following is a distinctive feature of French Bulldogs?", "answers": [ {"answerText": "Long fur", "isRight": false}, {"answerText": "Bat-like ears", "isRight": true}, {"answerText": "Webbed feet", "isRight": false} ] }, { "question": "When was the French Bulldog officially recognized by the American Kennel Club?", "answers": [ {"answerText": "1898", "isRight": false}, {"answerText": "1896", "isRight": false}, {"answerText": "1897", "isRight": true}, {"answerText": "1900", "isRight": false} ] }, { "question": "What size category do French Bulldogs belong to?", "answers": [ {"answerText": "Large", "isRight": false}, {"answerText": "Medium", "isRight": false}, {"answerText": "Small", "isRight": true} ] } ] },
        selction:[
            {
                searchValue:"History",
                elementName: "Subject"
            },
            {
                searchValue:"middle school",
                elementName: "Education"
            },
            {
                searchValue:"French Bulldog",
                elementName: "DogTypeOptions"
            }
        ]
    }

    
];


/*משתנה לשמירת ההתקדמות במשחק*/
let quizProgress = 0;
/*משתנה לשמירת מענה על תשובות נכונות*/
let currentCount = 0;
/*משתנה לווידוי מה מצב המשחק*/
let QuizMode = "CreateQuiz";

window.addEventListener("DOMContentLoaded", start);

window.addEventListener("click", chackIfClick);



/*פונקציה שמטרתה לשנות את כפתור היצירת משחק לפעיל לאחר שכל השדות הרלוונטים התמלאו*/
function chackIfClick() {
    if (QuizMode == "CreateQuiz") {
        if (document.querySelector('input[name="Subject"]:checked') && document.querySelector('input[name="DogTypeOptions"]:checked') && document.querySelector('input[name="Education"]:checked')) {
            if (document.querySelector('input[name="Subject"]:checked').value && document.querySelector('input[name="DogTypeOptions"]:checked').value && document.querySelector('input[name="Education"]:checked').value) {
                switchClassTo(document.getElementById("CreateQuizBut"), "disableNext", false);
            }
        }
    }
   
}

/*פונקציה לקבלת השאלות מהאי.פי.הי של הצ'אט*/
async function getQuestion() {
    /*שינוי תצוגה למסך טעינה*/
    document.body.id = 'QuestionPlayMode';
    switchClassTo(document.getElementById("ChooseDogButton"), "disableNext", true);
    switchClassTo(document.getElementsByClassName("loader")[0], "hide", false);
    switchClassTo(document.getElementById("Start"), "hide", true);

    /*קריאה לצ'אט*/
    const promt = {
        "subject": document.querySelector('input[name="Subject"]:checked').value,
        "type": document.querySelector('input[name="DogTypeOptions"]:checked').value,
        "educationLevel": document.querySelector('input[name="Education"]:checked').value
    }

    const url = baseUrl + "FinalGpt/GPTChat";
    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(promt)
    }

    const response = await fetch(url, params);
    if (response.ok) {
        const tampData = await response.json();
        GameData = JSON.parse(tampData);

        /*כיבוי מסך טעינה עם הצגת שאלות על המסך*/
        switchClassTo(document.getElementsByClassName("loader")[0], "hide", true);
        switchClassTo(document.getElementById("Start"), "hide", false);
        showQuestion();
    } else {
        console.log("EROOR");
        switchClassTo(document.getElementsByClassName("popup")[0], "hide", false);
    }

}


/*פונקציה אולי למחוק!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
async function fackGetQuestion() {
    console.log(document.getElementById("quizNum").value);
    GameData = allOptionQeustions[document.getElementById("quizNum").value].quizData;
    document.body.id = 'QuestionPlayMode';
    switchClassTo(document.getElementById("ChooseDogButton"), "disableNext", true);
    showQuestion();
}

/*עדכון שאלה על המסך*/
function showQuestion() {

    /*עדכון ההתקדמות*/
    document.getElementById("Progrss").innerText = `${quizProgress + 1}/5`;

    /*הגדרת משתנים כללים + איפוס*/
    let questionData = GameData["allQuestions"][quizProgress];

        const answersData = questionData["answers"];
        const answerContainer = document.getElementById("AnswerContainer");
        answerContainer.innerHTML = "";

    let rightPlace = -1;
    if (quizProgress == 4){
        document.getElementById("NextQeustion").innerText = "End Quiz";
    }
   
    switchClassTo(document.getElementById("NextQeustion"), "disableNext", true);
    switchClassTo(document.getElementById("AnswerContainer"), "disableAllBut", false);

    /*עדכון אלמנטים על המסך*/
    document.getElementById("QuestionText").innerText = questionData["question"];

        for (i = 0; i < answersData.length; i++) {
            const newAnswer = document.createElement("button");
            newAnswer.classList.add("clickable");
            newAnswer.innerText = answersData[i]["answerText"];
            let isRight = answersData[i]["isRight"];
            if (isRight) {
                rightPlace = i;
            }
            newAnswer.addEventListener("click", function() {
                if (QuizMode == "QuizPlaing") {
                    QuizMode = "QuizWait";
                    this.classList.add('pickedAnswer' + isRight);

                    if (isRight == false) {
                        console.log(rightPlace);
                        document.getElementById("AnswerContainer").getElementsByTagName("button")[rightPlace].classList.add("showCurrect");
                    }
                    else {
                        currentCount++;
                    }

                    document.getElementById("AnswerContainer").classList.add("disableAllBut");

                    switchClassTo(document.getElementById("NextQeustion"), "disableNext", false);
                   
                }
            });
            answerContainer.appendChild(newAnswer);
    }

    /*שינוי במצב משחק לפעיל*/
    QuizMode = "QuizPlaing";
    pageMengement("Quiz");
}

/*פונצקייה כאשר קוראת בפתיחת הדף*/
function start() {
    /*יצירת רשימת גזעי כלבים מאובייקט*/
    const container = document.getElementById("DogOptionContainer");
    DropDownDogType.forEach((dropDown) => {
        const Option = document.createElement("div");

        const input = document.createElement("input");
        input.type = "radio";
        input.id = "DogType_" + dropDown.id;
        input.value = dropDown.DogName;
        input.name = "DogTypeOptions";
        Option.appendChild(input);

        const label = document.createElement("label");
        label.setAttribute("for", input.id);
        label.classList.add("clickable");
        label.addEventListener("click", function () {
            switchClassTo(container, "hideDropDown", true);
            document.getElementById("SelectedDogImg").src = dropDown.Img;
            document.getElementById("SelectedDogImg").alt = "The picked dog is " + dropDown.DogName;
            document.getElementById("DogTypeQeustion").innerText = dropDown.DogName;
        })

        const img = document.createElement("img");
        img.src = dropDown.Img;
        img.alt = "Pick " + dropDown.DogName + " dog";

        const spen = document.createElement("spen");
        spen.innerText = dropDown.DogName;
        label.appendChild(spen);
        label.appendChild(img);
        

        Option.appendChild(label);

        container.appendChild(Option);
    });

    /*הצגת מסל פתיחה*/
    pageMengement("Start");
}

/*פונקציה שמחליטה מה עושים לאחר שלחצו על מעבר לשאלה הבאה*/
function nextQuestion() {
    /*העלת ההתקדמות במשחק*/
    quizProgress++;
    if (quizProgress < GameData["allQuestions"].length) {
        /*אם נשארו עוד שאלות במאגר אז הצג את השאלה הבאה*/
        showQuestion();
    }
    else {
        /*אם לא נשארו עוד שאלות במאגר אז תעבור למסך סיום ותציג מידע רלוונטי בדף*/
        let textFeedBack = "";
        let color = "red";

        if (currentCount == 0) {
            textFeedBack = "You are not so sharp today";
            color = "red";
        }
        else if (currentCount <= 2) {
            textFeedBack = "We know you can do better";
            color = "Coral";
        }
        else if (currentCount <= 4) {
            textFeedBack = "Well done!!!";
            color = "DarkSeaGreen";
        }
        else if (currentCount == 5) {
            textFeedBack = "WOW perfect score you are somthing else";
            color = "Chartreuse";
        }

        document.getElementById("FinalFeedback").innerHTML = `<p><span class="bigText">${textFeedBack}</span> <br/> You managed to answer ${currentCount}/5 questions!</p>`;

        document.body.id = 'QuizEnd';
        document.documentElement.style.setProperty('--SelectedDogButtonSize', '40vh');
        document.documentElement.style.setProperty('--SelectedDogButtonOutline', '10pt');

        pageMengement("FinalScreen");
    }
   
}

/*פונצקיה של פתיחת דפים*/
function pageMengement(showPage) {
    let allPages = document.getElementsByClassName("page");
    /*נעבור על כל האלמנטים שיש עליהם את קלאס פאיג' ונבדוק עם ההי.די שלו זהה למשתנה שנשלח לפונצקיה או לא*/
    for (i = 0; i < allPages.length;i++) {
        let thisPage = allPages[i];
        /*מצב הדיספלי מוסתר אם הדף הוא לא עם ההי.די ששלחנו לפונצקיה*/
        let displayMode = "none";
        if (thisPage.id == showPage) {
        /*מצב הדיספלי מוצג אם הדף הוא עם ההי.די ששלחנו לפונצקיה*/
            displayMode = "block";
        }
        thisPage.style.display = displayMode;
    }
}

/*פונקציה שעושה ווידו שלאלמנט יש או אין קלאס מסויים*/
function switchClassTo(myElement, myClass, willAdd) {
    /*בדיקה האם צריך להוסיף את הקלאס או להוריד*/
    if (willAdd) {
        /*בדקיה האם לא הקלאס לא קיים*/
        if (myElement.classList.contains(myClass) == false) {
            myElement.classList.add(myClass);
        }
    }
    else {
        /*בדקיה האם לא הקלאס קיים*/
        if (myElement.classList.contains(myClass)) {
            myElement.classList.remove(myClass);
        }
    }

}

/*זהו טאגל לדרופדאון של גזעי הכלבים*/
function openDogDropDown() {
    document.getElementById("DogOptionContainer").classList.toggle("hideDropDown");
}

function changeUserSelection(){
    const selectionPosition = document.getElementById("quizNum").value;
    const newSlection = allOptionQeustions[selectionPosition].selction;
    
    newSlection.forEach((searchData)=>{
        console.log(searchData.elementName);
        document.querySelectorAll(`input[name="${searchData.elementName}"]`).forEach((object)=>{
            if(searchData.searchValue == object.value){
                object.checked = true;

                if(searchData.elementName == "DogTypeOptions"){
                    const dropDown = DropDownDogType.find(dog => "DogType_"+dog.id === object.id);
                    console.log(dropDown);
                    document.getElementById("SelectedDogImg").src = dropDown.Img;
                    document.getElementById("SelectedDogImg").alt = "The picked dog is " + dropDown.DogName;
                    document.getElementById("DogTypeQeustion").innerText = dropDown.DogName;
                }
            }
            
        });
    });



}
