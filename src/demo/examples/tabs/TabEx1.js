import React from 'react';
import Tabs from '../../../lib/components/Tabs';

function TabEx1() {
    return (
        <Tabs>
            <Tabs.Tab tabId="1">Tab 1</Tabs.Tab>
            <Tabs.Tab tabId="2">Tab 2</Tabs.Tab>
            <Tabs.Tab tabId="3">Tab 3</Tabs.Tab>
            <Tabs.Tab tabId="4">Tab 4</Tabs.Tab>

            <Tabs.Panel tabId="1">
                <h2>Panel 1</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus omnis veniam rem recusandae nisi cupiditate enim
                    vero fugiat, quasi esse labore tempora nesciunt sint
                    eligendi iure error temporibus. Maiores velit perspiciatis
                    reprehenderit. Asperiores, officia. Obcaecati quas quae sint
                    incidunt dolore, molestiae, repudiandae placeat et, harum
                    saepe corrupti eum itaque
                </p>
            </Tabs.Panel>
            <Tabs.Panel tabId="2">
                <h2>Panel 2</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus omnis veniam rem recusandae nisi cupiditate enim
                    repudiandae placeat et, harum saepe corrupti eum itaque
                    officia recusandae odit fuga deleniti labore modi quia
                    perferendis nesciunt necessitatibus ipsa id voluptatum.
                    Tenetur ut, totam dolor aspernatur ex modi ad! Sunt, saepe
                    voluptatem ex omnis totam est enim ducimus dicta vel?
                    Recusandae enim beatae, rem aut, ducimus blanditiis,
                    obcaecati dolorem nihil deserunt maiores incidunt
                    accusantium saepe unde ad harum?
                </p>
            </Tabs.Panel>
            <Tabs.Panel tabId="3">
                <h2>Panel 3</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus omnis veniam rem recusandae nisi cupiditate enim
                    vero fugiat, quasi esse labore tempora nesciunt sint
                    eligendi iure error temporibus. Maiores velit perspiciatis
                    reprehenderit. Asperiores, officia. Obcaecati quas quae sint
                    incidunt dolore, molestiae, repudiandae placeat et, harum
                    saepe corrupti eum itaque officia recusandae odit fuga
                    deleniti labore modi quia perferendis nesciunt
                    necessitatibus ipsa id voluptatum. Tenetur ut, blanditiis,
                    obcaecati dolorem nihil deserunt maiores incidunt
                    accusantium saepe unde ad harum?
                </p>
            </Tabs.Panel>
            <Tabs.Panel tabId="4">
                <h2>Panel 4</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus omnis veniam rem recusandae nisi cupiditate enim
                    vero fugiat, quasi esse labore tempora nesciunt sint
                    eligendi iure error temporibus. Maiores velit perspiciatis
                    reprehenderit. Asperiores, officia. Obcaecati quas quae sint
                    incidunt dolore, molestiae, repudiandae placeat et, harum
                    saepe corrupti eum itaque officia recusandae odit fuga
                    deleniti labore modi quia perferendis nesciunt
                    necessitatibus ipsa id voluptatum. Tenetur ut, totam dolor
                    aspernatur ex modi ad! Sunt, saepe voluptatem ex omnis totam
                    est enim ducimus dicta vel? Recusandae enim beatae, rem aut,
                    ducimus blanditiis, obcaecati dolorem nihil deserunt maiores
                    incidunt accusantium saepe unde ad harum?
                </p>
            </Tabs.Panel>
        </Tabs>
    );
}

export default TabEx1;
