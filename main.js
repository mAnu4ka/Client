let api = 'https://wepro-groups.herokuapp.com/leads'

const REGEX = () => {
    let form = document.querySelectorAll('form')
    console.log(form);
    for (const item of form) {
        item.onsubmit = () => {
            event.preventDefault()
            let fm = new FormData(item)
            let Create_New_Task = {}

            fm.forEach((a, b) => {
                Create_New_Task[b] = a
            });

            axios.post(api,Create_New_Task)
        }
    }
}
REGEX()