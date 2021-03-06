import { WebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphService } from "../../../Services/MSGraphService";
export interface IUsersInformationProps {
  description: string;
  context:WebPartContext;
  MSGraphServiceInstance:MSGraphService;
}
