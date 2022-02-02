import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgApexchartsModule } from "ng-apexcharts";

import { IncomeCounterComponent } from './dashboard-components/income-counter/income-counter.component';
import { ProjectCounterComponent } from './dashboard-components/project-counter/project-counter.component';
import { ProjectComponent } from './dashboard-components/project/project.component';
import { RecentcommentComponent } from './dashboard-components/recent-comment/recent-comment.component';
import { RecentmessageComponent } from './dashboard-components/recent-message/recent-message.component';
import { SocialSliderComponent } from './dashboard-components/social-slider/social-slider.component';
import { TodoComponent } from './dashboard-components/to-do/todo.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { PageAnalyzerComponent } from './dashboard-components/page-analyzer/pa.component';
import { WidgetComponent } from './dashboard-components/widget/widget.component';
import { CustomerSupportComponent } from './dashboard-components/customer-support/cs.component';
import { TotalEarningComponent } from './dashboard-components/total-earnings/te.component';
import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { RvenueStatGraphComponent } from './dashboard-components/rvenue-stat-graph/rvenue-stat-graph.component';
import { SalesOfMonthComponent } from './dashboard-components/sales-of-month/sales-of-month.component';
import { SalesPredictionComponent } from './dashboard-components/sales-prediction/sales-prediction.component';
import { SalesDifferenceComponent } from './dashboard-components/sales-difference/sales-difference.component';
import { ProectOfMonthComponent } from './dashboard-components/proect-of-month/proect-of-month.component';
import { MonthlyEarningComponent } from './dashboard-components/monthly-earning/monthly-earning.component';
import { SalesAnalyticsComponent } from './dashboard-components/sales-analytics/sales-analytics.component';
import { BandwidthUsageComponent } from './dashboard-components/bandwidth-usage/bandwidth-usage.component';
import { ProdCalculationComponent } from './dashboard-components/prod-calculation/prod-calculation.component';
import { MembersActivityComponent } from './dashboard-components/members-activity/members-activity.component';
import { TodayScheduleComponent } from './dashboard-components/today-schedule/today-schedule.component';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    PerfectScrollbarModule,
    NgApexchartsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    IncomeCounterComponent,
    ProjectCounterComponent,
    ProjectComponent,
    RecentcommentComponent,
    RecentmessageComponent,
    SocialSliderComponent,
    TodoComponent,
    ProfileComponent,
    PageAnalyzerComponent,
    WidgetComponent,
    CustomerSupportComponent,
    TotalEarningComponent,
    FeedsComponent,
    RvenueStatGraphComponent,
    SalesOfMonthComponent,
    SalesPredictionComponent,
    SalesDifferenceComponent,
    ProectOfMonthComponent,
    MonthlyEarningComponent,
    SalesAnalyticsComponent,
    BandwidthUsageComponent,
    ProdCalculationComponent,
    MembersActivityComponent,
    TodayScheduleComponent,
    SalesOverviewComponent
  ]
})
export class DashboardModule { }
