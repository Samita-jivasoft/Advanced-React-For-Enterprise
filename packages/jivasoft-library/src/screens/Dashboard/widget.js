import React from 'react';
import { WidgetStyled } from './Styles';
import useResizable from 'app/helpers/useResizable/useResizable';

const Widget = ({ workflow, index,viewWidth, viewHeight,  ...droppableProps}) => {
    const { resizableProps, size } = useResizable({
        initialWidth: viewWidth,
        initialHeight: viewHeight,
    });

    return (
        <WidgetStyled {...resizableProps} {...droppableProps} 
        data-idx={index} key={workflow.workflowid}>
            {workflow.friendlyname}
        </WidgetStyled>
    );
};

export default Widget;
