import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { MSGraphService } from "../../Services/MSGraphService";

import * as strings from 'UsersInformationWebPartStrings';
import UsersInformation from './components/UsersInformation';
import { IUsersInformationProps } from './components/IUsersInformationProps';

export interface IUsersInformationWebPartProps {
  description: string;
}

export default class UsersInformationWebPart extends BaseClientSideWebPart <IUsersInformationWebPartProps> {
  private MsGraphServiceInstance:MSGraphService;
  


  public render(): void {
    const element: React.ReactElement<IUsersInformationProps> = React.createElement(
      UsersInformation,
      {
        description: this.properties.description,
        context:this.context,
        MSGraphServiceInstance:this.MsGraphServiceInstance
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected async onInit(){
    await super.onInit();
    this.MsGraphServiceInstance = new MSGraphService();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
