export interface OrganizationInterface {
  companyCode: { id: number | string; name: string };
  salesOrganization: { id: number | string; name: string };
  distributionChannel: { id: number | string; name: string };
  division: { id: number | string; name: string };
}
