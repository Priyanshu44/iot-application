export * from './generated';

import { OpenAPI, DashboardsService } from './generated';

// put token here
OpenAPI.TOKEN = '';
OpenAPI.BASE = 'http://localhost:3000';

export type ListDashboards = typeof DashboardsService.dashboardsControllerList;
export type CreateDashboard =
  typeof DashboardsService.dashboardsControllerCreate;
export type ReadDashboard = typeof DashboardsService.dashboardsControllerRead;
export type UpdateDashboard =
  typeof DashboardsService.dashboardsControllerUpdate;
export type DeleteDashboard =
  typeof DashboardsService.dashboardsControllerDelete;

export const listDashboards: ListDashboards = () =>
  DashboardsService.dashboardsControllerList();
export const createDashboard: CreateDashboard = (dto) =>
  DashboardsService.dashboardsControllerCreate(dto);
export const readDashboard: ReadDashboard = (id) =>
  DashboardsService.dashboardsControllerRead(id);
export const updateDashboard: UpdateDashboard = (id, dto) =>
  DashboardsService.dashboardsControllerUpdate(id, dto);
export const deleteDashboard: DeleteDashboard = (id) =>
  DashboardsService.dashboardsControllerDelete(id);