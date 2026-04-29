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
import { SSelect } from "../../packages/base/select/index";
import { SOption } from "../../packages/base/option/index";
import { SInputNumber } from "../../packages/base/input-number/index";
import { SSlider } from "../../packages/base/slider/index";
import { SLayout } from "../../packages/base/layout/index";
import { SBox } from "../../packages/base/box/index";
import { SDivider } from "../../packages/base/divider/index";
import { SSpace } from "../../packages/base/space/index";
import { SLink } from "../../packages/base/link/index";

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
app.use(SSelect as any);
app.use(SOption as any);
app.use(SInputNumber as any);
app.use(SSlider as any);
app.use(SLayout as any);
app.use(SBox as any);
app.use(SDivider as any);
app.use(SSpace as any);
app.use(SLink as any);

app.mount("#dev");
