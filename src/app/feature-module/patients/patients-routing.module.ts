import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    children: [
      {
        path: 'booking',
        loadChildren: () =>
          import('./booking/booking.module').then((m) => m.BookingModule),
      },
      {
        path: 'doctors',
        loadChildren: () =>
          import('./doctors/doctors.module').then((m) => m.DoctorsModule),
      },
      {
        path: 'search-doctor',
        loadChildren: () =>
          import('./search-doctor/search-doctor.module').then(
            (m) => m.SearchDoctorModule
          ),
      },
      {
        path: 'doctor-profile',
        loadChildren: () =>
          import('./doctor-profile/doctor-profile.module').then(
            (m) => m.DoctorProfileModule
          ),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'patient-dashboard',
        loadChildren: () =>
          import('./patient-dashboard/patient-dashboard.module').then(
            (m) => m.PatientDashboardModule
          ),
      },
      {
        path: 'favourites',
        loadChildren: () =>
          import('./favourites/favourites.module').then(
            (m) => m.FavouritesModule
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./chat/chat.module').then((m) => m.ChatModule),
      },
      {
        path: 'profile-settings',
        loadChildren: () =>
          import('./profile-settings/profile-settings.module').then(
            (m) => m.ProfileSettingsModule
          ),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import('./change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: 'booking-success',
        loadChildren: () =>
          import('./booking/booking-success/booking-success.module').then(
            (m) => m.BookingSuccessModule
          ),
      },
      {
        path: 'consultation',
        loadChildren: () =>
          import('./consultation/consultation.module').then(
            (m) => m.ConsultationModule
          ),
      },
      {
        path: 'dependent',
        loadChildren: () =>
          import('./dependent/dependent.module').then((m) => m.DependentModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./payment/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'orders-list',
        loadChildren: () =>
          import('./orders-list/orders-list.module').then(
            (m) => m.OrdersListModule
          ),
      },
      {
        path: 'medical-records',
        loadChildren: () =>
          import('./medical-records/medical-records.module').then(
            (m) => m.MedicalRecordsModule
          ),
      },
      {
        path: 'medical-details',
        loadChildren: () =>
          import('./medical-details/medical-details.module').then(
            (m) => m.MedicalDetailsModule
          ),
      },
      {
        path: 'patient-accounts',
        loadChildren: () =>
          import('./patient-accounts/patient-accounts.module').then(
            (m) => m.PatientAccountsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
