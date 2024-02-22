const path = [
    "/images/autumn-colors.jpg",
    "/images/autumn.jpg",
    "/images/colors.jpg"
];

const Images = ({imageIndex}) =>{
    return <img src= {process.env.PUBLIC_URL+path[imageIndex]} alt="Autumn colors"/>
}
export default Images;