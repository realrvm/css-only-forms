import * as React from "react";

import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Switch } from "./Switch";
import { Label } from "./Label";

const App = () => (
    <div className="wrapper">
        <ul>
            <li>
                <Label title="Checkbox">
                    <Checkbox />
                </Label>
            </li>
            <li>
                <Label title="Checkbox">
                    <Checkbox checked />
                </Label>
            </li>
            <li>
                <Label title="Radio">
                    <Radio name="group1" />
                </Label>
            </li>
            <li>
                <Label title="Radio">
                    <Radio name="group1" checked />
                </Label>
            </li>
            <li>
                <Label title="Switch">
                    <Switch />
                </Label>
            </li>
            <li>
                <Label title="Switch">
                    <Switch checked />
                </Label>
            </li>
        </ul>

        <ul>
            <li>
                <Label title="Checkbox">
                    <Checkbox disabled />
                </Label>
            </li>
            <li>
                <Label title="Checkbox">
                    <Checkbox checked disabled />
                </Label>
            </li>
            <li>
                <Label title="Radio">
                    <Radio disabled />
                </Label>
            </li>
            <li>
                <Label title="Radio">
                    <Radio checked disabled />
                </Label>
            </li>
            <li>
                <Label title="Switch">
                    <Switch disabled />
                </Label>
            </li>
            <li>
                <Label title="Switch">
                    <Switch checked disabled />
                </Label>
            </li>
        </ul>
    </div>
);

export default App;
