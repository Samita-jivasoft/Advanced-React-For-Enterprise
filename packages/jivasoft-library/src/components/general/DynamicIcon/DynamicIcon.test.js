import React from "react";
import { render, screen } from "@testing-library/react";
import { DynamicIcon } from "components";
import { useAppTheme } from "app/data";
import { GiNotebook } from "react-icons/gi";
import { FaPlus, FaBookOpen,FaPen,FaTrashAlt } from "react-icons/fa";
import { useGetFillColorByTypeOrStatus, getBadgePositionStyles } from "components/general/DynamicIcon/helpers";

import {
  getIcon,
  useGetStatus,
  useGetBackground,
} from "components/general/DynamicIcon/helpers";

import { MdListAlt } from "react-icons/md";
import { RiPieChartBoxLine } from "react-icons/ri";

jest.mock("app/data", () => ({
  useAppTheme: jest.fn(),
}));

jest.mock("react-icons/gi", () => ({
  GiNotebook: () => <svg title="notebook-icon"></svg>,
}));
jest.mock("react-icons/md", () => ({
    MdListAlt: () => <svg title="crud-icon" />,
    MdEdit: () => <svg title="edit-icon" />,
    MdEditOff: () => <svg title="editoff-icon" />,
  }));

const mockThemeState = {
  currentTheme: {
    successColor: "#008079",
    infoColor: "#B8DAFF",
    warnColor: "#FFB753",
    dangerColor: "#FF5353",
    secondaryColor: "#5FD3FF",
    bgSolid: "#E4E4E4",
  },
};


describe("DynamicIcon", () => {

  beforeEach(() => {
    useAppTheme.mockReturnValue([mockThemeState]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  describe("Test for components", ()=>{
    test("Initial Render", () => {
        const renderedComponent = render(<DynamicIcon />);
        const iconWrapper = renderedComponent.getByTestId("icon-wrapper");
        //console.log(renderedComponent)
        expect(iconWrapper).toBeInTheDocument();
        //console.log("TestDone 1")
      });

      describe("Props Handling",()=>{
        test('for checking type, should render the correct icon for "form" type', () => {
          render(<DynamicIcon type="form" />);
          const icon = screen.getByTitle("notebook-icon");
          expect(icon).toBeInTheDocument();
          //console.log("TestDone 2")
        });
        
        test('for checking type, should render the correct icon for "crud" type', () => {
          render(<DynamicIcon type="crud" />);
          const icon = screen.getByTitle("crud-icon");
          expect(icon).toBeInTheDocument();
          //console.log("TestDone 3")
        });
  
        test('for checking type,[failing test]]', () => {
          render(<DynamicIcon type="crud" />);
          const icon = screen.queryByTitle("edit-icon"); 
          expect(icon).not.toBeInTheDocument();
        });
        
        test("for the badge", () => {
          render(
            <DynamicIcon
              badge={{ position: "top-right", background: "red", label: "10" }}
            />
          );
          const badge = screen.getByText("10");
          expect(badge).toBeInTheDocument();
          expect(badge).toHaveStyle(`background-color: red`);
          expect(badge).toHaveStyle(`transform: translate(100%,-90%)`);
          //console.log("TestDone 4")
        });
      
        test("for the initials when showInitials prop is true", () => {
          render(<DynamicIcon label="Schedule Details" showInitials />);
          const initials = screen.getByText("SD");
          expect(initials).toBeInTheDocument();
          //console.log("TestDone 5")
        });
      
        test("for missing or invalid props", () => {
          const consoleErrorMock = jest.fn();
          console.error = consoleErrorMock;
          // console.log("In console",console.error)
          render(<DynamicIcon type="invalid" status="invalid" />);
          expect(consoleErrorMock).not.toHaveBeenCalled();
        });
      

      })
    
      
  })

  //Test for helpers
  describe("Test for getIcon", () => {
    test("for form, should return GiNotebook", () => {
      const icon = getIcon("form");
      expect(icon).toEqual(<GiNotebook />);
    });
    test("for crud, should return MDListAlt", () => {
      const icon = getIcon("crud");
      expect(icon).toEqual(<MdListAlt />);
    });
    test("for report, should return RiPieChartBoxLine", () => {
      const icon = getIcon("report");
      expect(icon).toEqual(<RiPieChartBoxLine />);
    });
    test("for unknown, should return null", () => {
      const icon = getIcon("null");
      expect(icon).toEqual(null);
    });
  });


  describe("Test for useGetStatus", () => {
    test("for create", () => {
      const icon = useGetStatus("create");
      expect(icon).toEqual( <FaPlus style={{ color: '#E4E4E4' }} />);
    });
    test("for read", () => {
        const icon = useGetStatus("read");
        expect(icon).toEqual( <FaBookOpen style={{ color: '#E4E4E4' }} />);
    });
    test("for report", () => {
        const icon = useGetStatus("update");
        expect(icon).toEqual( <FaPen style={{ color: '#E4E4E4' }} />);
    });
    test("for delete", () => {
        const icon = useGetStatus("delete");
        expect(icon).toEqual( <FaTrashAlt style={{ color: '#E4E4E4' }} />);
    });
    test("for null", () => {
        const icon = useGetStatus("any");
        expect(icon).toEqual( null);
    }); 
 
  });

  describe('Test for useGetBackground', () => {
    test('for background color based on type and status', () => {
      const background = useGetBackground('form', true, 'create');
      expect(background).toBe('#e8f3f3');
    });
    test('returns transparent when background is false', () => {
      const background = useGetBackground('form', false, 'create');
      expect(background).toBe('transparent');
    });

  });

  describe('Test for useGetFillColorByTypeOrStatus', () => {
    test('when both type and status is passed, type takes precedence', () => {
        const background = useGetFillColorByTypeOrStatus('form', 'create');
        expect(background).toBe('#008079');
    });
    test('when only status is passed', () => {
        const background = useGetFillColorByTypeOrStatus( 'create');
        expect(background).toBe('#5FD3FF');
    });
    test('when only type is passed', () => {
        const background = useGetFillColorByTypeOrStatus('form');
        expect(background).toBe('#008079');
    });
    test('when unknown value is passed', () => {
        const background = useGetFillColorByTypeOrStatus('unknown');
        expect(background).toBe('#5FD3FF');
    });

  });

  describe('getBadgePositionStyles', () => {
    test(' for top-right position', () => {
      const styles = getBadgePositionStyles('top-right');
      expect(styles.trim()).toBe('transform: translate(100%, -90%);');
    });
  
    test('for bottom-right position', () => {
      const styles = getBadgePositionStyles('bottom-right');
      expect(styles.trim()).toBe('transform: translate(30%, 90%);');
    });
  
    test('for top-left position', () => {
      const styles = getBadgePositionStyles('top-left');
      expect(styles.trim()).toBe('transform: translate(-30%, -100%);');
    });
  
    test('for bottom-left position', () => {
      const styles = getBadgePositionStyles('bottom-left');
      expect(styles.trim()).toBe('transform: translate(-30%, 90%);');
    });
  
    test('for unknown position', () => {
      const styles = getBadgePositionStyles('unknown');
      expect(styles.trim()).toBe('transform: translate(60%, -90%);');
    });
  });

});


