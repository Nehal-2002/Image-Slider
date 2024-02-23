
function NavBtn({className,changeIdx,imgId}){
    function check(id){
        return imgId===id?"active":"not-active";
    }
    return(
        <div className={className}>
            <button onClick={()=> changeIdx(0)} className={check(0)}></button>
            <button onClick={()=> changeIdx(1)} className={check(1)}></button>
            <button onClick={()=> changeIdx(2)} className={check(2)}></button>
        </div>
    )
}

export default NavBtn;