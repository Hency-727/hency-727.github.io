window.HENCY_BLOG_POSTS = [
    {
        "title": "Diffusion Policy",
        "date": "2026-05-10",
        "slug": "diffusion-policy",
        "tags": "DP",
        "summary": "",
        "markdown": "**标题：**Diffusion Policy: Visuomotor Policy Learning via Action Diffusion\n\n**链接：**https://arxiv.org/pdf/2303.04137\n\n![image](assets/blog_images/1.png)\n\n为什么这里action horizon可以影响trade-off between responsiveness and temporal consistancy?\n需要清楚，action horizon越小，比如说1，此时就不是action chunkings output了，当然会影响动作连贯性；action horizon越大，相比于小的horizon推理的时间会更长，responsiveness就低一些。\n\n**Temporal Action Consistancy**：动作序列在时间维度上的连贯性\n\n",
        "updatedAt": "2026-05-10T05:33:59.314Z"
    },
    {
        "title": "π0",
        "date": "2026-05-10",
        "slug": "0",
        "tags": "VLA",
        "summary": "",
        "markdown": "**标题**: π0: A Vision-Language-Action Flow Model for General Robot Control\n**文章链接**：https://arxiv.org/pdf/2410.24164\n**总体架构**：\n\n![image](assets/blog_images/8.png)\n\n**注意**：In practice, the representation would be broken since the cross-attention integration between visual observations and predicted noisy tactile signals\n\n**VLM架构**（以PaliGemma为例）：\n**decoder-only transformer architecture, using self-attection to connect different tokens**\n![image](assets/blog_images/9.png)",
        "updatedAt": "2026-05-10T05:34:13.546Z"
    },
    {
        "title": "ImplicitRDP",
        "date": "2026-05-10",
        "slug": "implicitrdp",
        "tags": "DP",
        "summary": "",
        "markdown": "**标题**：ImplicitRDP: An End-to-End Visual-Force Diffusion Policy with Structural Slow-Fast Learning\n**文章链接**：https://arxiv.org/pdf/2512.10946\n**总体结构**：\n![image](assets/blog_images/2.png)\n\n**slow fast system architecture**：\n![image](assets/blog_images/3.png)\n\n**casual cross attention in transformer-decoder**：\n行是query，列是key/values，这里代表说action看不到未来的force\n\n![image](assets/blog_images/4.png)\ndp原作也有该结构，代表说action emb看不到未来的action emb，这里准确来说应该是casual self-attention，目的是使得未来动作会参考过去动作，从而沿着同一个 mode 继续走，可提高temporal action coherence/consistancy\n\n**为什么做casual self-attention**（未来看得到过去，过去看不到未来，保持一个方向的因果逻辑）：\n1. 保持时间因果方向\n2. 让后续动作延续前序动作的 mode\n3. 避免当前要执行的动作过度依赖未执行的未来计划\n4. 更接近 autoregressive-style 的轨迹展开\n\n\n\n\n\n",
        "updatedAt": "2026-05-10T05:34:42.345Z"
    },
    {
        "title": "FACTR",
        "date": "2026-05-10",
        "slug": "factr",
        "tags": "ACT",
        "summary": "",
        "markdown": "**标题**：FACTR: Force-Attending Curriculum Training for Contact-Rich Policy Learning\n**文章链接**：https://arxiv.org/pdf/2502.17432\n**总体框架**：\n![image](assets/blog_images/7.png)\n\n**创新点**：\n1. 遥操作系统\n2. utilizing curriculum learning to better use force feedback in policy learning\n\n**注意**：重点看 curriculum learning的模块",
        "updatedAt": "2026-05-10T05:35:10.162Z"
    },
    {
        "title": "ALOHAUnleashed",
        "date": "2026-05-10",
        "slug": "alohaunleashed",
        "tags": "ACT",
        "summary": "",
        "markdown": "**标题**：ALOHAUnleashed: A Simple Recipe for Robot Dexterit\n**文章链接**：https://arxiv.org/pdf/2410.13126\n**总体架构**：\n![image](assets/blog_images/10.png)\n",
        "updatedAt": "2026-05-10T05:35:27.178Z"
    },
    {
        "title": "ViTacFormer",
        "date": "2026-05-10",
        "slug": "vitacformer",
        "tags": "ACT",
        "summary": "",
        "markdown": "**标题**： ViTacFormer: Learning Cross-Modal Representation for Visuo-Tactile Dexterous Manipulation\n**文章链接**：https://arxiv.org/pdf/2506.15953\n**总体架构**：\n![image](assets/blog_images/5.png)\n**创新点**：\n1. 视触觉通过cross attention融合表征\n2. 触觉auto regressive输出（与原始tokens【z/joints/images/touch】）后预测action chunkings\n\n**tactile predictor**：\n![image](assets/blog_images/6.png)\n\n**实验**：\n1. benchmark and environment setup\n2. metrics and baselines\n3. algorithm comparison\n3.1 comparison with sota baseline\n3.2 perform on complex long-horizon tasks\n4. ablation study\n4.1 contribution from each different conponent\n4.2 failture study",
        "updatedAt": "2026-05-10T05:35:54.388Z"
    },
    {
        "title": "ATTENTION RESIDUALS",
        "date": "2026-05-10",
        "slug": "attention-residuals",
        "tags": "ATTENTION",
        "summary": "",
        "markdown": "**标题**：ATTENTION RESIDUALS\n**文章链接**：https://arxiv.org/pdf/2603.15031\n**总体架构**：\n![image](assets/blog_images/11.png)\n\n**原理关键**：\n1. MoE: mixture of experts\n2. simple residuals:\n![image](assets/blog_images/12.png)\n其中，\n![image](assets/blog_images/13.png)\nattention residuals改成：\n![image](assets/blog_images/14.png)\n\n3. Full AttnRes每一层都要存所有之前层的输出：\n```python\nLayer 1 output\nLayer 2 output\nLayer 3 output\n...\nLayer L output\n```\nBlock AttnRes分块了：\n```python\n# 跨 block：用 Attention Residuals\n# block 内部：仍然用普通 residual\nBlock n-1\nBlock n-2\n...\n```\nai的理解：\n![image](assets/blog_images/15.png)\n\n4. attention？\n\n![image](assets/blog_images/16.png)\n\n即：\n```python\n历史层输出 v0, v1, v2, ...\n        ↓\n和当前层的 w_l 做匹配\n        ↓\nsoftmax 得到 α0, α1, α2, ...\n        ↓\n加权求和得到当前层输入 h_l\n```\n\n**为什么说是LSTM竖过来？**：\nLSTM沿时间方向维护一个 memory，并用 gate 控制信息流\n```python\n上一时刻:\nh_{t-1}, c_{t-1}\n\n当前输入:\nx_t\n\n        h_{t-1}, x_t\n              ↓\n ┌────────────┼────────────┐\n ↓            ↓            ↓\nforget gate  input gate   candidate\n f_t          i_t          c̃_t\n ↓            ↓            ↓\n f_t*c_{t-1}  i_t*c̃_t\n        \\      /\n         \\    /\n          ↓  ↓\n        c_t = f_t*c_{t-1} + i_t*c̃_t\n          ↓\n      output gate o_t\n          ↓\n        h_t = o_t*tanh(c_t)\n```\nAttenResi是沿着layer/block方向（空间）+用attention筛选\n\n沿着时间方向：数据随时间进入网络\n沿着深度方向：同一个数据，随着深度，多次被处理",
        "updatedAt": "2026-05-10T05:36:12.004Z"
    },
    {
        "title": "FlowPolicy",
        "date": "2026-05-10",
        "slug": "flowpolicy",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：FlowPolicy:Enabling Fast and Robust 3D Flow-based Policy via Consistency Flow Matching for Robot Manipulation\n**文章链接**：https://arxiv.org/pdf/2412.04987\n**概述**：使用flow matching以及【straight-line flow 和 velocity consistency】实现one-step inference（因此比dp快，因为dp一次观测多步去噪得到结果），性能优于dp3、simple dp3\n\n**总体架构**：\n![image](assets/blog_images/17.png)\n\n**temporal action consistancy**: 动作序列在时间维度上的连贯性",
        "updatedAt": "2026-05-10T05:38:19.650Z"
    },
    {
        "title": "Learning Robotic Manipulation Policies from Point Clouds with Conditional Flow Matching",
        "date": "2026-05-10",
        "slug": "learning-robotic-manipulation-policies-from-point-clouds-with-conditional-flow-matching",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：Learning Robotic Manipulation Policies from Point Clouds with Conditional Flow Matching\n**文章链接**：https://arxiv.org/pdf/2409.07343\n**总体架构**：\n\n![image](assets/blog_images/18.png)",
        "updatedAt": "2026-05-10T05:38:54.757Z"
    },
    {
        "title": "ChainedDiffuser",
        "date": "2026-05-10",
        "slug": "chaineddiffuser",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：ChainedDiffuser: Unifying Trajectory Diffusion and Keypose Prediction for Robotic Manipulation\n**文章链接**：https://openreview.net/forum?id=W0zgY2mBTA8\n**总体架构**：\n\n![image](assets/blog_images/19.png)",
        "updatedAt": "2026-05-10T05:39:21.202Z"
    },
    {
        "title": "AdaFlow",
        "date": "2026-05-10",
        "slug": "adaflow",
        "tags": "FM",
        "summary": "",
        "markdown": "**标题**：AdaFlow: Imitation Learning with Variance-Adaptive Flow-Based Policies\n**文章链接**：https://arxiv.org/abs/2402.04292\n**总体架构**：\n![image](assets/blog_images/20.png)",
        "updatedAt": "2026-05-10T05:39:43.090Z"
    },
    {
        "title": "Homer",
        "date": "2026-05-10",
        "slug": "homer",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题：**HOMER:Learning In-the-Wild Mobile Manipulation\nvia Hybrid Imitation and Whole-Body Control\n**链接：**https://arxiv.org/pdf/2506.01185\n**总体架构：**\n![image](assets/blog_images/21.png)\n\n**Experiments:**\n",
        "updatedAt": "2026-05-10T05:59:13.307Z"
    },
    {
        "title": "RDP",
        "date": "2026-05-10",
        "slug": "rdp",
        "tags": "DP",
        "summary": "",
        "markdown": "**文章标题：**Reactive Diffusion Policy:\nSlow-Fast Visual-Tactile Policy Learning for Contact-Rich Manipulation\n**链接：**https://arxiv.org/pdf/2503.02881\n**总体架构：**\n![image](assets/blog_images/24.png)\n\n**Experiments:**\n1. core problems: \n1) tactile image vs tactile embedding, \n2) rdp(slow-fast closed-loop) vs dp\n2. baselines: DP/DP(T-image)/DP(T-embedding)/RDP(T-embedding)/RDP(F)\n3. benchmark = 任务设计 + 数据/环境 + 评价指标 + 实验协议:\n1）任务设计\n![image](assets/blog_images/26.png)\n2）数据/环境：真机数据\n3）metrics:\n![image](assets/blog_images/25.png)\n\n4）实验协议：\n第一，所有方法使用类似初始状态，通过**预定义图像手动对齐机器人和物体**。\n\n第二，Peeling 和 Wiping 设置三种测试变化：**无扰动**、**接触前扰动**、**接触后扰动**；Bimanual Lifting 设置软纸杯和硬纸杯两种变化。\n第三，每个 **test-time variation 运行 10 次**。\n第四，因为测试中有人类参与，论文采用了 **single-blind testing：每次随机选择一个模型评估，评估者不知道当前测试的是哪个模型，以减少主观判断影响**。\n第五，**控制频率也被规范化**：DP 和 RDP 的 slow policy 预测 12 FPS 的 action sequence；RDP fast policy 使用 24 FPS 的 tactile/force observation 并输出 24 FPS action（no sequence）；最终**动作插值**后以 500 Hz 发送给机器人。\n\n![image](assets/blog_images/28.png)\n## Writing Architecture\ndesign experiment questions：Q1、Q2、Q3、Q4、Q5、Q6、Q7\nA. Setup\n1) Hardware\n2) Baselines\n3) Tasks\n4) Evaluation Protocols\n5) Implementation Details\nB. Results\nQ1、Q2、Q3、Q4、Q5、Q6、Q7\n",
        "updatedAt": "2026-05-10T07:01:15.882Z"
    }
];
