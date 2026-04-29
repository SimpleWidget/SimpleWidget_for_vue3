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

const app = createApp(App);

app.use(SButton as any);
app.use(SIcon as any);
app.use(SInput as any);
app.use(SBadge as any);
app.use(STag as any);
app.use(STooltip as any);
app.use(SRipple as any);
app.use(SLoading as any);

app.mount("#dev");
