function SimpsonComponent(props) {
    let classNameItem = "card";
    let {itemName, pic}=props;
    return (
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
        </div>
    );
}
export default SimpsonComponent;