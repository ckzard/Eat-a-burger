document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    const devourBtns = document.querySelectorAll('.change-devour');

    if (devourBtns) {
        devourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log("test");
                const id = e.target.getAttribute('data-id');
                const newDevour = e.target.getAttribute('data-newdevour');

                const newDevourState = {
                    devoured: newDevour,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newDevourState),
                }).then((response) => {
                    if (response.ok) {
                        console.log(`changed devoured to ${newDevour}`);
                        location.reload('/');
                    } else {
                        alert("Something went wrong!");
                    }
                })
            })
        })
    }
})