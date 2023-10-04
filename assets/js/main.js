// The idea for a panelized style came from a template
// The template exclusively utilized jquery, so this is my implementation in plain JavaScript
// 
// Panel toggle functions
function classAdd(a, b) { a.classList.add(b) }
function classRemove(a, b) { a.classList.remove(b) }
function toggle(a, b = true) {
    if (b == true) {
        classAdd(a, 'fade')
        setTimeout(() => { classAdd(a, 'inactive') }, 500)
    }
    if (b == false) {
        setTimeout(() => { classRemove(a, 'inactive') }, 500)
        setTimeout(() => { classRemove(a, 'fade') }, 1000)
    }
}
// Theme toggle function
let theme = 'main'
function toggleTheme(a) {
  classRemove(document.getElementById('body'), 'github')
  classRemove(document.getElementById('body'), 'codepen')
  classRemove(document.getElementById('body'), 'linkedin')
  classRemove(document.getElementById('body'), 'main')
  if (a == '#github') {
  classRemove(document.getElementById('body'), 'codepen')
  classRemove(document.getElementById('body'), 'linkedin')
  classRemove(document.getElementById('body'), 'main')
    classAdd(document.getElementById('body'), 'github')
    }
  if (a == '#codepen') {
  classRemove(document.getElementById('body'), 'github')
  classRemove(document.getElementById('body'), 'linkedin')
  classRemove(document.getElementById('body'), 'main')
    classAdd(document.getElementById('body'), 'codepen')
  }
  if (a == '#linkedin') {
  classRemove(document.getElementById('body'), 'github')
  classRemove(document.getElementById('body'), 'codepen')
  classRemove(document.getElementById('body'), 'main')
    classAdd(document.getElementById('body'), 'linkedin')
  }
  if (a == '#welcome-section' || a == '#projects' || a == '#about') {
  classRemove(document.getElementById('body'), 'github')
  classRemove(document.getElementById('body'), 'codepen')
  classRemove(document.getElementById('body'), 'linkedin')
    classAdd(document.getElementById('body'), 'main')
  }
}
// Get lists of elements
const navLinks = document.getElementsByClassName('navlink')
const panels = document.getElementsByClassName('panel')
// Setup events for navlinks
function navigation() {
    for (let i = 0; i < navLinks.length; i++) {
        const elem = navLinks[i]
        const href = elem.getAttribute('href')
        elem.addEventListener('click', function (event) {
            event.preventDefault()
            event.stopPropagation()
            if (window.location.hash != href) {
                window.location.hash = href
                initialize(i)
              toggleTheme(href)
            }
        })
    }
}

// initialize the loaded frame
function initialize(val) {
    //   Skip transitions on page load
    if (val == undefined) {
        for (let item of panels) {
            if (item != panels[0]) {
                classAdd(item, 'inactive')
                classAdd(item, 'fade')
            }
        }
        return;
    }
    let panel = panels[val]
    for (let item of panels) {
        if (item != panel) {
            toggle(item, true)
        } else if (item == panel) {
            toggle(item, false)
        }
    }
}
// Page Load Events
window.addEventListener('DOMContentLoaded', function () {
    // remove panels without delay
    initialize()
    navigation()
})