import { createApp } from "vue";
import App from "./App.vue";

// 开发阶段引入
import { SButton } from "../../packages/base/button/index";
import { SIcon } from "../../packages/base/icon/index";
import { SInput } from "../../packages/base/input/index";
import { SBadge } from "../../packages/base/badge/index";
import { STag } from "../../packages/base/tag/index";
import { STooltip } from "../../packages/base/tooltip/index";
import { SRipple } from "../../packages/base/ripple/index";
import { SLoading } from "../../packages/base/loading/index";
import { SCheckbox } from "../../packages/base/checkbox/index";
import { SCheckboxGroup } from "../../packages/base/checkbox-group/index";
import { SRadio } from "../../packages/base/radio/index";
import { SRadioGroup } from "../../packages/base/radio-group/index";
import { SSwitch } from "../../packages/base/switch/index";
import { STextarea } from "../../packages/base/textarea/index";

const app = createApp(App);

app.use(SButton as any);
app.use(SIcon as any);
app.use(SInput as any);
app.use(SBadge as any);
app.use(STag as any);
app.use(STooltip as any);
app.use(SRipple as any);
app.use(SLoading as any);
app.use(SCheckbox as any);
app.use(SCheckboxGroup as any);
app.use(SRadio as any);
app.use(SRadioGroup as any);
app.use(SSwitch as any);
app.use(STextarea as any);

app.mount("#dev");
