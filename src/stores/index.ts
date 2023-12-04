import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { timeReducer } from './slices/time.slice';
import { serviceReducer } from './slices/service.slice';
import { voucherReducer } from './slices/voucher.slice';
import { staffReducer } from './slices/staff.slice';
import { appointmentReducer } from './slices/appointment.slice';
import { customerReducer } from './slices/customer.slice';

// Kết hợp reducer
const rootReducer = combineReducers({
    timeStore: timeReducer,
    serviceStore: serviceReducer,
    voucherStore: voucherReducer,
    staffStore: staffReducer,
    appointmentStore: appointmentReducer,
    customerStore: customerReducer,
});

// Xuất ra store type
export type StoreType = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer
})

export default store