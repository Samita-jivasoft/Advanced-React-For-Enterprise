import { GenericLoaderWrapper } from "./styles/Generic";
export const GenericLoader = ({ children }) => {

  console.log("children", children)
  return (
    <GenericLoaderWrapper>
          <div className="background">
            <div className= "foreground"> 
            {children}
            </div>
          
          </div>
    </GenericLoaderWrapper>
  );
};
