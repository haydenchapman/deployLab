const btn = document.querySelector('button')

const clickHandler = () => alert('The car is: Nissan Skyline GTR')

btn.addEventListener('click', clickHandler)

const btn2 = document.querySelector('#button2')

const getCar = () => {
    axios.get('http://ec2-54-190-98-158.us-west-2.compute.amazonaws.com/api/car')
    .then(res => {
        alert(res.data)
    })
    .catch(arr => {
        console.log(arr)
    })
}

btn2.addEventListener('click', getCar)