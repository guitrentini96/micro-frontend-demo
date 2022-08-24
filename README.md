# Micro Frontend Demo

To run _Micro Frontend Demo_ in your local machine:

1. clone
1. cd into it
1. make sure you have npm installed running `npm -v`
   - If not installed, download it thru [this link](https://nodejs.org/en/download/)
1. cd into orchestrator/
    - run `npm i`
    - run `npm start`
1. leave the terminal running, open a new terminal window and cd into mmdz/
    - run `npm i`
    - run `npm start -- --port 8500`
1. leave the terminal running, open a new terminal window and cd into def/
    - run `npm i`
    - run `npm start -- --port 8501`
1. leave the terminal running, open a new terminal window and cd into musics/
    - run `npm i`
    - run `npm start -- --port 8502`

---

You will then be able to access it at localhost:9000/mmdz