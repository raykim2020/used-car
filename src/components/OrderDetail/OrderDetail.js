
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
        <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );

    return (
        <div>
            <div>
                {order.isPaid ?
                    <span>ORDER <span className="smaller">{order.orderId}</span></span>
                    :
                    <span>NEW ORDER</span>
                }
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div >
                {lineItems.length ?
                    <>
                        {lineItems}
                        <section>
                            {order.isPaid ?
                                <span>TOTAL&nbsp;&nbsp;</span>
                                :
                                <button
                                    className="btn-sm"
                                    onClick={handleCheckout}
                                    disabled={!lineItems.length}
                                >CHECKOUT</button>
                            }
                            <span>{order.totalQty}</span>
                            <span>${order.orderTotal.toFixed(2)}</span>
                        </section>
                    </>
                    :
                    <div>Hungry?</div>
                }
            </div>
        </div>
    );
}