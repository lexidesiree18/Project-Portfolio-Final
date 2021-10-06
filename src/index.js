const name= "Lexi"
const last = "Shealy"
const summary = "I'm a creative Junior Web Developer, that incoporates an artistic perspective to my work. I also enjoy creating orginal digital work in my free time!"
const instagram = "digitaldiversity_"
const github = "lexidesiree18"

function render(project){
   console.log(project.name)
}

async function onPageLoad(){
    const intro= document.getElementById('intro-paragraph')
    intro.innerHTML = summary
    const introH= document.getElementById("intro-heading")
    introH.innerHTML= `Hi I'm ${name}!`
    const nameH = document.getElementById("name")
    nameH.innerHTML = `${name} ${last}` 
    const experience = document.getElementById('experience') 
    experience.href = "./experience/experience.html"
    const resume = document.getElementById('resume')
    resume.href= "./resume/resume.html"
    const githubA = document.getElementById('githubA')
    githubA.href = `https://github.com/${github}`
    const instagramA = document.getElementById('instagram')
    instagramA.href=`https://instagram.com/${instagram}`
    const response = await fetch(`https://api.github.com/users/${github}/repos`)
    const projects = await response.json();
    for (let project of projects) {
        render(project);
      }
}


