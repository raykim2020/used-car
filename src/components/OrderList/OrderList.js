import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
    const orderItems = orders.map(o =>
        <OrderListItem
            order={o}
            isSelected={o === activeOrder}
            handleSelectOrder={handleSelectOrder}
            key={o._id}
        />
    );

    return (
        <main>
            {orderItems.length ?
                orderItems
                :
                <span>No Previous Orders</span>
            }
        </main>
    )
};