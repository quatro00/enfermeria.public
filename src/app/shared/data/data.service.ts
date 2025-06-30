import { Injectable } from '@angular/core';
import { routes } from '../routes/routes';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { apiResultFormat } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  public getAppointmentList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/appointment-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSpecialities(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/specialities.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDoctorList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/doctor-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPatientList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/patient-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getReviews(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/reviews.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTransactionsList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/transactions-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInvoiceReport(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/invoice-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDataTables(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/admin/json/data-tables.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getProductList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/product-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getOutstock(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/outstock.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getExpired(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/expired.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getCategories(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/categories.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPurchaseList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/purchase-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getOrder(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/order.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSales(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/sales.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getSupplierList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/supplier-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getTransactionList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/transactions-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInvoiceReports(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/pharmacy/json/invoice-report.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getAccounts(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/accounts.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDependentList(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/dependent-list.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDoctorDashboard1(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/doctor-dashboard1.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMedicalRecords1(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/medical-records1.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMedicalRecords2(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/medical-records2.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getDoctorDashboard2(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/doctor-dashboard2.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getMedicalDetails(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/medical-details.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getInvoice(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoice.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getOrdersList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/orders-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getpatientProfile1(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-profile1.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getpatientProfile2(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-profile2.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getpatientProfile3(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-profile3.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getpatientProfile4(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-profile4.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPatientDashboard1(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-dashboard1.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPatientDashboard2(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-dashboard2.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPatientDashboard3(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-dashboard3.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPatientDashboard4(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-dashboard4.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getappoinment4(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/appoinment4.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPatientAccounts1(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-accounts1.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getPatientAccounts2(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/json/patient-accounts2.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public header = [
    {
      tittle: 'Inicio',
      showAsTab: false,
      separateRoute: false,
      route: '#inicio',
      menu: [],
    },
    {
      tittle: 'Quienes somos',
      showAsTab: false,
      separateRoute: false,
      route: '#quienesSomos',
      menu: [],
    },
    {
      tittle: 'Nuestros servicios',
      showAsTab: false,
      separateRoute: false,
      route: '#nuestrosServicios',
      menu: [],
    },
    {
      tittle: 'Nuevos pacientes',
      showAsTab: false,
      separateRoute: false,
      route: '#nuevosPacientes',
      menu: [],
    },
    {
      tittle: 'Preguntas frecuentes',
      showAsTab: false,
      separateRoute: false,
      route: '#preguntasFrecuentes',
      menu: [],
    },
    {
      tittle: 'Bolsa de trabajo',
      showAsTab: false,
      separateRoute: false,
      route: '#bolsaDeTrabajo',
      menu: [],
    }
  ];
  public adminSidebar = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.adminDashboard,
          icon: 'fe fe-home',
        },
        {
          menuValue: 'Appointments',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.appointmentList,
          icon: 'fe-layout',
        },
        {
          menuValue: 'Specialities',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.specialities,
          icon: 'fe fe-users',
        },
        {
          menuValue: 'Doctors',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.doctorList,
          icon: 'fe fe-user-plus',
        },
        {
          menuValue: 'Patients',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.patientList,
          icon: 'fe fe-user',
        },
        {
          menuValue: 'Reviews',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.reviews,
          icon: 'fe fe-star-o',
        },
        {
          menuValue: 'Transactions',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.adminTransactionsList,
          icon: 'fe fe-activity',
        },
        {
          menuValue: 'Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.adminSettings,
          icon: 'fe fe-vector',
        },
        {
          menuValue: 'Reports',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-document',
          subMenus: [
            {
              menuValue: 'Invoice Reports',
              route: routes.adminInvoiceReport,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Profile',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.adminProfile,
          icon: 'fe fe-user-plus',
        },
        {
          menuValue: 'Authentication',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-document',
          subMenus: [
            {
              menuValue: 'Login',
              route: routes.adminLogin,
            },
            {
              menuValue: 'Register',
              route: routes.adminRegister,
            },
            {
              menuValue: 'Forgot Password',
              route: routes.adminForgotPassword,
            },
            {
              menuValue: 'Lock Screen',
              route: routes.adminLockScreen,
            },
          ],
        },
        {
          menuValue: 'Error Pages',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-warning',
          subMenus: [
            {
              menuValue: '404 Error',
              route: routes.error404,
            },
            {
              menuValue: '500 Error',
              route: routes.error500,
            },
          ],
        },
        {
          menuValue: 'Blank Page',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.blankPage,
          icon: 'fe fe-file',
        },
      ],
    },
    {
      tittle: 'UI Interface',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Components',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.components,
          icon: 'fe fe-vector',
        },
        {
          menuValue: 'Forms',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-layout',
          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.formBasicInputs,
            },
            {
              menuValue: 'Input Groups',
              route: routes.formInputGroups,
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.formHorizontal,
            },
            {
              menuValue: 'Vertical Form',
              route: routes.formVertical,
            },
            {
              menuValue: 'Form Mask',
              route: routes.formMask,
            },
            {
              menuValue: 'Form Validation',
              route: routes.formValidation,
            },
          ],
        },
        {
          menuValue: 'Tables',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-table',
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.tablesBasic,
            },
            {
              menuValue: 'Data Tables',
              route: routes.dataTables,
            },
          ],
        },
      ],
    },
  ];
  public pharmacySidebar = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.pharmacyDashboard,
          icon: 'fe fe-home',
        },
        {
          menuValue: 'Products',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-document',
          subMenus: [
            {
              menuValue: 'Products',
              route: routes.productList,
            },
            {
              menuValue: 'Add Product',
              route: routes.addProducts,
            },
            {
              menuValue: 'Out-Stock',
              route: routes.outstock,
            },
            {
              menuValue: 'Expired',
              route: routes.expired,
            },
          ],
        },
        {
          menuValue: 'Categories',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.categories,
          icon: 'fe-layout',
        },
        {
          menuValue: 'Purchase',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-document',
          subMenus: [
            {
              menuValue: 'Purchase',
              route: routes.purchaseList,
            },
            {
              menuValue: 'Add Purchase',
              route: routes.addPurchase,
            },
            {
              menuValue: 'Order',
              route: routes.order,
            },
          ],
        },
        {
          menuValue: 'Sales',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.sales,
          icon: 'fe fe-user-plus',
        },
        {
          menuValue: 'Supplier',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-document',
          subMenus: [
            {
              menuValue: 'Supplier',
              route: routes.supplierList,
            },
            {
              menuValue: 'Add Supplier',
              route: routes.addSupplier,
            },
          ],
        },
        {
          menuValue: 'Transaction',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.pharmacyTransactionsList,
          icon: 'fe fe-user-plus',
        },
        {
          menuValue: 'Reports',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fe fe-document',
          subMenus: [
            {
              menuValue: 'Invoice Reports',
              route: routes.pharmacyInvoiceReport,
            },
          ],
        },
      ],
    },
    {
      tittle: 'Pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Profile',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.pharmacyProfile,
          icon: 'fe fe-user-plus',
        },
        {
          menuValue: 'Settings',
          hasSubRoute: false,
          showSubRoute: false,
          route: routes.pharmacySettings,
          icon: 'fe fe-user-plus',
        },
      ],
    },
  ];
  public aboutUs = [
    {
      img: 'assets/img/clients/client-01.jpg',
      heading1: 'Testimonials',
      heading2: 'What Our Client Says',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'John Doe',
      location: 'New York',
    },
    {
      img: 'assets/img/clients/client-02.jpg',
      heading1: 'Testimonials',
      heading2: 'What Our Client Says',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Amanda Warren',
      location: 'Florida',
    },
    {
      img: 'assets/img/clients/client-03.jpg',
      heading1: 'Testimonials',
      heading2: 'What Our Client Says',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Betty Carlson',
      location: 'Georgia',
    },
    {
      img: 'assets/img/clients/client-04.jpg',
      heading1: 'Testimonials',
      heading2: 'What Our Client Says',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Veronica',
      location: 'California',
    },
    {
      img: 'assets/img/clients/client-05.jpg',
      heading1: 'Testimonials',
      heading2: 'What Our Client Says',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Richard',
      location: 'Michigan',
    },
  ];
  public aboutUs2 = [
    {
      img: 'assets/img/doc-slide-1.png',
      heading1: 'Introducing Prime Doctors',
      heading2: 'Hassle-free appoinments',
      content: 'Reasonable wait time',
      name: 'John Doe',
      location: 'New York',
    },
  ];
  public booking2 = [
    {
      day: 'Monday',
      date: 'Sep 5',
    },
    {
      day: 'Tuesday',
      date: 'Sep 6',
    },
    {
      day: 'Wednesday',
      date: 'Sep 7',
    },
    {
      day: 'Thursday',
      date: 'Sep 8',
    },
    {
      day: 'Friday',
      date: 'Sep 9',
    },
    {
      day: 'Saturday',
      date: 'Sep 10',
    },
    {
      day: 'Sunday',
      date: 'Sep 11',
    },
  ];
  public specialitiesSliderOne = [
    {
      img: 'assets/img/specialities/specialities-01.svg',
      content: 'Cardiology',
    },
    {
      img: 'assets/img/specialities/specialities-02.svg',
      content: 'Neurology',
    },
    {
      img: 'assets/img/specialities/specialities-03.svg',
      content: 'Urology',
    },
    {
      img: 'assets/img/specialities/specialities-04.svg',
      content: 'Orthopedic',
    },
    {
      img: 'assets/img/specialities/specialities-05.svg',
      content: 'Dentist',
    },
    {
      img: 'assets/img/specialities/specialities-06.svg',
      content: 'Ophthalmology',
    },
    {
      img: 'assets/img/specialities/specialities-02.svg',
      content: 'Neurology',
    },
  ];
  public doctorSliderOne = [
    {
      img: 'assets/img/doctors/doctor-03.jpg',
      amount: '$ 200',
      name: 'Dr. Ruby Perrin',
      content: 'Cardiology',
      rating1: '4.5',
      rating2: '(35)',
      location: 'Newyork, USA',
    },
    {
      img: 'assets/img/doctors/doctor-04.jpg',
      amount: '$ 360',
      name: 'Dr. Darren Elder',
      content: 'Neurology',
      rating1: '4.0',
      rating2: '(20)',
      location: 'Florida, USA',
    },
    {
      img: 'assets/img/doctors/doctor-05.jpg',
      amount: '$ 360',
      name: 'Dr. Sofia Brient',
      content: 'Urology',
      rating1: '4.5',
      rating2: '(30)',
      location: 'Georgia, USA',
    },
    {
      img: 'assets/img/doctors/doctor-02.jpg',
      amount: '$ 360',
      name: 'Dr. Sofia Brient',
      content: 'Urology',
      rating1: '4.5',
      rating2: '(30)',
      location: 'Georgia, USA',
    },
    {
      img: 'assets/img/doctors/doctor-01.jpg',
      amount: '$ 570',
      name: 'Dr. Paul Richard',
      content: 'Orthopedic',
      rating1: '4.3',
      rating2: '(45)',
      location: 'Michigan, USA',
    },
    {
      img: 'assets/img/doctors/doctor-03.jpg',
      amount: '$ 880',
      name: 'Dr. John Doe',
      content: 'Dentist',
      rating1: '4.4',
      rating2: '(50)',
      location: 'California, USA',
    },
  ];
  public partnersSlider = [
    {
      img: 'assets/img/partners/partners-1.svg',
    },
    {
      img: 'assets/img/partners/partners-2.svg',
    },
    {
      img: 'assets/img/partners/partners-3.svg',
    },
    {
      img: 'assets/img/partners/partners-4.svg',
    },
    {
      img: 'assets/img/partners/partners-5.svg',
    },
    {
      img: 'assets/img/partners/partners-6.svg',
    },
    {
      img: 'assets/img/partners/partners-1.svg',
    },
    {
      img: 'assets/img/partners/partners-2.svg',
    },
    {
      img: 'assets/img/partners/partners-3.svg',
    },
    {
      img: 'assets/img/partners/partners-4.svg',
    },
    {
      img: 'assets/img/partners/partners-5.svg',
    },
    {
      img: 'assets/img/partners/partners-6.svg',
    },
  ];
  public newPassword = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'DreamsLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'DreamsLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'DreamsLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public nurseSliderOne = [
    {
      img: 'assets/img/nurses/nurse-01.jpg',
      name: 'Elizabeth Penelope',
      content: '7+ Years Experience',
      percentage: '98%',
      distance: '1856 Patients',
      location: '700 m',
    },
    {
      img: 'assets/img/nurses/nurse-02.jpg',
      name: 'Dorothy Joanne',
      content: '5+ Years Experience',
      percentage: '97%',
      distance: '2589 Patients',
      location: '2.5 m',
    },
    {
      img: 'assets/img/nurses/nurse-03.jpg',
      name: 'Rachel Sophie',
      content: '8+ Years Experience',
      percentage: '91%',
      distance: '5478 Patients',
      location: '900 m',
    },
    {
      img: 'assets/img/nurses/nurse-04.jpg',
      name: 'Carolyn',
      content: '7+ Years Experience',
      percentage: '94%',
      distance: '1756 Patients',
      location: '600 m',
    },
    {
      img: 'assets/img/nurses/nurse-05.jpg',
      name: 'Jasmine Madeleine',
      content: '10+ Years Experience',
      percentage: '98%',
      distance: '1856 Patients',
      location: '700 m',
    },
    {
      img: 'assets/img/nurses/nurse-06.jpg',
      name: 'Samantha Tracey',
      content: '15+ Years Experience',
      percentage: '95%',
      distance: '1156 Patients',
      location: '500 m',
    }
    
  ];
  public recommendedBlog = [
    {
      img: 'assets/img/blog/blog-18.jpg',
      title: 'Health and Safety',
      date:'01 May 2023',
     views:'1k views',
     head:'Adapting Homes for Aging Gracefully: Design Tips for Old Age Comfort',
     para:'Explore practical design tips to make living spaces in old age homes adaptable and comfortable, enhancing the quality of life for seniors. Learn about accessibility, safety features, and creating a warm environment.'
    },
    {
      img: 'assets/img/blog/blog-19.jpg',
      title: 'Health and Safety',
      date:'01 May 2023',
     views:'1k views',
     head:'Adapting Homes for Aging Gracefully: Design Tips for Old Age Comfort',
     para:'Explore practical design tips to make living spaces in old age homes adaptable and comfortable, enhancing the quality of life for seniors. Learn about accessibility, safety features, and creating a warm environment.'
    },
    {
      img: 'assets/img/blog/blog-20.jpg',
      title: 'Health and Safety',
      date:'01 May 2023',
     views:'1k views',
     head:'Adapting Homes for Aging Gracefully: Design Tips for Old Age Comfort',
     para:'Explore practical design tips to make living spaces in old age homes adaptable and comfortable, enhancing the quality of life for seniors. Learn about accessibility, safety features, and creating a warm environment.'
    },
    
  ];
  public restaurants = [
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'America – Grand canyon, Golden Gate',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$42',
      rating: ' 4.9',
      review: '(2,312 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-2.jpg',
      title: 'top rated',
      servicedetails: 'Argentina – Great Diving Trip',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$62',
      rating: ' 4.9',
      review: '(2,312 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-3.jpg',
      title: 'best seller',
      servicedetails: 'Brazil – Rio de Janeiro',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$32',
      rating: ' 4.9',
      review: '(1,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-4.jpg',
      title: 'Break Fast Included',
      servicedetails: 'India – Mumbai, New Delhi',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$82',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
  ];
  public shops = [
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'America – Grand canyon, Golden Gate',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$42',
      rating: ' 4.9',
      review: '(2,312 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-2.jpg',
      title: 'top rated',
      servicedetails: 'Argentina – Great Diving Trip',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-3.jpg',
      title: 'best seller',
      servicedetails: 'Brazil – Rio de Janeiro',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$45',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-4.jpg',
      title: 'Break Fast Included',
      servicedetails: 'India – Mumbai, New Delhi',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
    {
      img: 'assets/img/recommended/gallery-1.jpg',
      title: 'best seller',
      servicedetails: 'Lorem Ipsum is simply dummy text of the printing',
      mappin: 'Westminster , London',
      details: 'Starting from',
      amount: 'US$72',
      rating: ' 4.9',
      review: '(2,612 Reviews)',
    },
  ];
  public partnerSlider = [
    {
      img: 'assets/img/partners/partners-7.svg',
    },
    {
      img: 'assets/img/partners/partners-8.svg',
    },
    {
      img: 'assets/img/partners/partners-9.svg',
    },
    {
      img: 'assets/img/partners/partners-10.svg',
    },
    {
      img: 'assets/img/partners/partners-11.svg',
    },
    {
      img: 'assets/img/partners/partners-12.svg',
    },
    {
      img: 'assets/img/partners/partners-7.svg',
    },
    {
      img: 'assets/img/partners/partners-8.svg',
    },
    {
      img: 'assets/img/partners/partners-9.svg',
    },
    {
      img: 'assets/img/partners/partners-10.svg',
    },
    {
      img: 'assets/img/partners/partners-11.svg',
    },
    {
      img: 'assets/img/partners/partners-12.svg',
    },
   
  ];
  public nurseSlidertwo = [
    {
      img: 'assets/img/nurses/nurse-04.jpg',
      name: 'Carolyn',
      content: '7+ Years Experience',
      percentage: '94%',
      distance: '1756 Patients',
      location: '600 m',
      fees:'$120',
      day:'Per day',
      country:'United States'
    },
    {
      img: 'assets/img/nurses/nurse-05.jpg',
      name: 'Jasmine Madeleine',
      content: '5+ Years Experience',
      percentage: '98%',
      distance: '1856 Patients',
      location: '700 m',
      fees:'$100',
      day:'Per day',
      country:'United States'
    },
    {
      img: 'assets/img/nurses/nurse-06.jpg',
      name: 'Samantha Tracey',
      content: '15+ Years Experience',
      percentage: '95%',
      distance: '1156 Patients',
      location: '500 m',
      fees:'$150',
      day:'Per day',
      country:'United States'
    },
    {
      img: 'assets/img/nurses/nurse-01.jpg',
      name: 'Elizabeth Penelope',
      content: '7+ Years Experience',
      percentage: '98%',
      distance: '1856 Patients',
      location: '700 m',
      fees:'$140',
      day:'Per day',
      country:'United States'
    },
    {
      img: 'assets/img/nurses/nurse-02.jpg',
      name: 'Dorothy Joanne',
      content: '10+ Years Experience',
      percentage: '97%',
      distance: '2589 Patients',
      location: '2.5 m',
      fees:'$160',
      day:'Per day',
      country:'United Kingdom'
    },
    {
      img: 'assets/img/nurses/nurse-03.jpg',
      name: 'Rachel Sophie',
      content: '8+ Years Experience',
      percentage: '91%',
      distance: '5478 Patients',
      location: '900 m',
      fees:'$120',
      day:'Per day',
      country:'United States'
    }
    
  ];
  public listingDetails = [
    {
      img: 'assets/img/slider/video-slider-img-01.jpg',
    },
    {
      img: 'assets/img/slider/video-slider-img-02.jpg',
    },
    {
      img: 'assets/img/slider/video-slider-img-03.jpg',
    },
    
    {
      img: 'assets/img/slider/video-slider-img-04.jpg',
    },
  ];
  public listingDetails2 = [
    {
      img: 'assets/img/slider/video-slider-thumb-01.jpg',
    },
    {
      img: 'assets/img/slider/video-slider-thumb-02.jpg',
    },
    {
      img: 'assets/img/slider/video-slider-thumb-03.jpg',
    },
    {
      img: 'assets/img/slider/video-slider-thumb-01.jpg',
    },
    {
      img: 'assets/img/slider/video-slider-thumb-02.jpg',
    },
    {
      img: 'assets/img/slider/video-slider-thumb-03.jpg',
    }
  ];
  public swiperCarousel = [
    {
      img: 'assets/img/slider/swiper-slide-img-01.jpg',
      heading: 'Asthma Apply',
      span: 'Includes 90 Parameters',
      newPrice: '$350.25',
      oldPrice: '$699.00',
      book: 'Book Now',
    },
    {
      img: 'assets/img/slider/swiper-slide-img-02.jpg',
      heading: 'Asthma Apply',
      span: 'Includes 70 Parameters',
      newPrice: '$250.25',
      oldPrice: '$499.00',
      book: 'Book Now',
    },
    {
      img: 'assets/img/slider/swiper-slide-img-03.jpg',
      heading: 'Asthma Apply',
      span: 'Includes 80 Parameters',
      newPrice: '$150.25',
      oldPrice: '$199.00',
      book: 'Book Now',
    },
  ];
}
