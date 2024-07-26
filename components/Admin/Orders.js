import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal'; // Adjust the import path as needed

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/order');
      const data = await response.json();
      setOrders(data.data);
    } catch (error) {
      console.error('Error fetching orders:', error.message);
    }
  };

  const handleCardClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-4">
        <h2 className="text-3xl font-extrabold text-gray-900 flex-grow">Захиалгууд</h2>
        <div className="flex items-center">
          <span className="text-lg font-semibold text-gray-600 mr-1">
            {orders.length}
          </span>
          <span className="text-md text-gray-500">Захиалга</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-3xl border shadow-sm p-6 cursor-pointer overflow-hidden flex flex-col justify-between"
            onClick={() => handleCardClick(order)}
          >
            <div className="flex flex-col flex-grow">
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {order.isClosed ? 'Хаалттай захиалга' : 'Нээлттэй захиалга'}
              </p>
              <hr className="mb-4" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Холбогдох дугаар:</span> {order.phoneNumber}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Овог:</span> {order.lastname}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Нэр:</span> {order.firstname}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Order Date:</span> {order.orderDate}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        order={selectedOrder}
        onEditStatus={() => console.log('Edit Status')} // Define your edit function
        onDeleteStatus={() => console.log('Delete Status')} // Define your delete function
      />
    </div>
  );
};

export default Orders;
