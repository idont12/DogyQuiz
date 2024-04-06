const baseUrl = "https://localhost:7036/api/";
const DropDownValus = [
    {
        "conainerID": "educationId",
        "allValus": [
            {
                "Text": "Elementary school",
                "Value": "elementary school"
            },
            {
                "Text": "Middle school",
                "Value": "middle school"
            },
            {
                "Text": "High school",
                "Value": "high school"
            },
            {
                "Text": "Higher education",
                "Value": "higher education"
            },
        ]
    },
    {
        "conainerID": "languageId",
        "allValus": [
            {
                "Text": "English",
                "Value": "English"
            },
            {
                "Text": "Hebrew",
                "Value": "Hebrew"
            },
            {
                "Text": "Spanish",
                "Value": "Spanish"
            },
            {
                "Text": "Japanese",
                "Value": "Japanese"
            },
            {
                "Text": "Arabic",
                "Value": "Arabic"
            },
        ]
    }
];

window.addEventListener("DOMContentLoaded", start);

async function getQuestion() {

    const promt = {
        "mySubject": document.getElementById("prompt").value,
        "myEducation": document.getElementById("educationId").value,
        "myLanguage": document.getElementById("languageId").value,
        "wordNum": document.getElementById("WordCount").value
    }

    const url = baseUrl + "GPT/GPTChat";
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
        let data = await response.json();

        const questionsList = document.getElementById("questions");
        const question = document.createElement("li");
        console.log(data);
        data = JSON.parse(data);
        //const splitIndex = data.indexOf("A: ");
        //const questionText = data.substring(0, splitIndex).trim();
        //const answerText = data.substring(splitIndex).trim();
        if (promt.myLanguage == "Japanese" || promt.myLanguage == "Hebrew" || promt.myLanguage == "Arabic") {
            question.classList.add("rightText");
        }
        
        question.innerHTML = `<span>Q: ${data["question"]}</span></br><span class="answer">A: ${data["answer"]}</span>`
        questionsList.appendChild(question);
    } else {
        console.log("EROOR");
    }

}

async function getExplain() {

    const promt = {
        "teacherName": document.getElementById("chacacter").value,
        "mySubject": document.getElementById("prompt").value,
        "myEducation": document.getElementById("educationId").value,
        "myLanguage": document.getElementById("languageId").value,
        "wordNum": document.getElementById("WordCount").value
    }

    const url = baseUrl + "GPT/GPTChatExplain";
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
        let data = await response.json();

        const questionsList = document.getElementById("questions");
        const Explain = document.createElement("li");

        if (promt.myLanguage == "Japanese" || promt.myLanguage == "Hebrew" || promt.myLanguage == "Arabic") {
            Explain.classList.add("rightText");
        }

        Explain.innerHTML = `<span class="teacher">${promt.teacherName}: </span></br><span>${data}</span>`
        questionsList.appendChild(Explain);
    } else {
        const ErrorLi = document.createElement("li");
        ErrorLi.innerHTML = `<span style="color:red;">oops.. There was an error. <br> Try again</span>`
        questionsList.appendChild(ErrorLi);
    }

}

function start() {
    DropDownValus.forEach((dropDown) => {
        const container = document.getElementById(dropDown.conainerID);
        dropDown.allValus.forEach((option) => {
            const newOption = document.createElement("option");
            newOption.value = option.Value;
            newOption.innerText = option.Text;

            container.appendChild(newOption);
        });
    });

    changeSlider();
}

function changeSlider() {
    document.getElementById("WordCountValue").innerText = document.getElementById("WordCount").value;
}