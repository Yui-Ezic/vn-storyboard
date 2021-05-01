import React from 'react';
import './App.css';
import {Layer, Rect, Stage} from "react-konva";

function generateShapes() {
    return [...Array(1)].map((_, i) => ({
        id: i.toString(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        isDragging: false,
    }));
}

const INITIAL_STATE = generateShapes();

function App() {
    const [rects, setRects] = React.useState(INITIAL_STATE);

    const handleDragStart = (e) => {
        const id = e.target.id();
        console.log(rects);
        setRects(
            rects.map((rect) => {
                return {
                    ...rect,
                    isDragging: rect.id === id,
                };
            })
        );
    };
    const handleDragEnd = (e) => {
        setRects(
            rects.map((rect) => {
                return {
                    ...rect,
                    isDragging: false,
                };
            })
        );
    };

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {rects.map((rect) => (
                    <Rect
                        key={rect.id}
                        x={rect.x}
                        y={rect.y}
                        width={100}
                        height={100}
                        fill="red"
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.6}
                        shadowOffsetX={rect.isDragging ? 10 : 5}
                        shadowOffsetY={rect.isDragging ? 10 : 5}
                        scaleX={rect.isDragging ? 1.2 : 1}
                        scaleY={rect.isDragging ? 1.2 : 1}
                        draggable
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </Layer>
        </Stage>
    );
}

export default App;
