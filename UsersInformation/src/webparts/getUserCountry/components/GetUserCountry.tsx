import * as React from 'react';
import styles from './GetUserCountry.module.scss';
import { IGetUserCountryProps } from './IGetUserCountryProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IGetUserCountryState } from "./IGetUserCountryState";
import { Log } from '@microsoft/sp-core-library';

export default class GetUserCountry extends React.Component<IGetUserCountryProps, IGetUserCountryState> {
  constructor(props:IGetUserCountryProps){
    super(props);

    this.state = {
      isLoading:false
    };

    this._GetUserCountry();
  }
  
  private _GetUserCountry = () =>{
    try {
      this.setState({
        isLoading:true
      },async()=>{
        let email :string = "d1@techinsider.onmicrosoft.com";
        let country = await this.props.MsGraphServiceInstance.getUserCountry(email,this.props.context);
        if(country){
          Log.info("_GetUserCountry()",country);
        }
        else
        {
          Log.info("_GetUserCountry()",country);
        }
      });
    } catch (error) {
      
    }
  }
  
  
  public render(): React.ReactElement<IGetUserCountryProps> {
    return (
      <div className={ styles.getUserCountry }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
