export default function MenuListItem({ menuItem, handleAddToOrder }) {
    return (
        <div>
            <div>{menuItem.name}</div>
            <div>
                <span>${menuItem.price.toFixed(2)}</span>
                <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
                    ADD
                </button>
            </div>
        </div>
    );
}