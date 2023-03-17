import axios from 'axios'

const onFulfilled = (config) => {
  const accessToken = window.localStorage.getItem('token')
	if (accessToken) {
		config.headers = {
			Authorization: `Bearer ${accessToken}`
		}
	}

	return config
}

const setupInterceptor = (instance) => {
  instance.interceptors.request.use(onFulfilled)
}

const instance = axios.create({
  baseURL: 'https://hotels-booking-application-server.vercel.app/api',
});
setupInterceptor(instance)

const api = {
  login: (data) => instance.post('/user/login', data),
  transactionDashboard: () => instance.get('/admin/dashboard'),
  allTrans: () => instance.get('/admin/transactions'),
  hotels: () => instance.get('/admin/hotels'),
  rooms: () => instance.get('/admin/rooms'),
  addHotel: (data) => instance.post('/admin/hotels',data),
  addRoom: (data) => instance.post('/admin/rooms',data),
  deleteHotelById: (hotelId) => instance.delete(`/admin/hotels/${hotelId}`),
  deleteRoomById: (roomId) => instance.delete(`/admin/rooms/${roomId}`)
}

export default api