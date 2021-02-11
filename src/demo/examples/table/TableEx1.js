import React, { useState } from 'react';
import Table from '../../../lib/components/Table';

function TableEx1() {
    const [size, setSize] = useState('default');
    const [border, setBorder] = useState('default');
    const [hover, setHover] = useState(true);
    const [headHasColor, setHeadHasColor] = useState(true);

    const tableSize = size === 'default' ? null : size;
    const tableBorder = border === 'default' ? null : border;

    return (
        <div>
            <div>
                <label htmlFor="sizeDrop">Size</label>
                <select
                    id="sizeDrop"
                    value={size}
                    onChange={(e) => {
                        setSize(e.target.value);
                    }}
                >
                    <option value="s">Small</option>
                    <option value="default">Default</option>
                    <option value="l">Large</option>
                </select>
            </div>
            <div>
                <label htmlFor="borderDrop">Border</label>
                <select
                    id="borderDrop"
                    value={border}
                    onChange={(e) => {
                        setBorder(e.target.value);
                    }}
                >
                    <option value="all">All</option>
                    <option value="default">Default</option>
                    <option value="none">None</option>
                </select>
            </div>
            <div>
                <label htmlFor="hoverCheck">Hover</label>
                <input
                    type="checkbox"
                    id="hoverCheck"
                    checked={hover}
                    onChange={(e) => {
                        setHover(e.target.checked);
                    }}
                />
            </div>
            <div>
                <label htmlFor="headHasColorCheck">Heading Background</label>
                <input
                    type="checkbox"
                    id="headHasColorCheck"
                    checked={headHasColor}
                    onChange={(e) => {
                        setHeadHasColor(e.target.checked);
                    }}
                />
            </div>

            <Table
                size={tableSize}
                border={tableBorder}
                hover={hover}
                removeHeadColor={!headHasColor}
            >
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                        <th>Header 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                        <td>data 4</td>
                        <td>data 5</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                        <td>data 4</td>
                        <td>data 5</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                        <td>data 4</td>
                        <td>data 5</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                        <td>data 4</td>
                        <td>data 5</td>
                    </tr>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                        <td>data 4</td>
                        <td>data 5</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TableEx1;
