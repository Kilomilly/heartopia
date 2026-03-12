# Heartopia 游戏官网设计风格指南
## 为设计师(AI)准备的完整视觉规范

> 本指南基于Heartopia游戏的真实视觉风格,确保网站设计与游戏完美匹配,给玩家"这就是官网"的感觉。

---

## 🎮 游戏风格概述

**Heartopia** 是一款温馨治愈的3D生活模拟游戏,核心玩法包括:
- 🎨 角色换装 (Let's Dress Up - 1000+ Daily Outfits)
- 🏡 家居装饰 (Let's Decorate - Craft Your Cozy Haven)
- 🌱 农场种植 (Let's Explore - Gardening, Fishing, Birding...)
- 🎵 音乐派对 (Let's Party - Create Unique Memories)

### 视觉风格定位
- **3D可爱风格**: Q版角色,大眼睛,柔和的3D渲染
- **柔和色调**: 马卡龙色系,低饱和度的柔和配色
- **圆润造型**: 所有UI元素都采用圆角设计
- **治愈系氛围**: 温暖、放松、无压力的视觉感受
- **游戏感**: 保留游戏UI的可爱字体和标签风格

### 核心设计关键词
`治愈` `温柔` `可爱` `柔和` `圆润` `童话` `梦幻` `舒适` `放松` `亲切`

---

## 🎨 配色方案 (从游戏截图提取)

### 主色系统

#### 🩷 粉色系 - Let's Dress Up 主题
**淡粉红 (Soft Pink)**
- HEX: `#FFB5C5` `#FFA4B6` `#FF9AB0`
- RGB: rgb(255, 181, 197)
- 用途: 换装系统、少女风格内容、主要CTA按钮
- 特点: 温柔甜美,不刺眼的粉色

**珊瑚粉 (Coral Pink)**
- HEX: `#FF8BA7` `#FF7B9C`
- RGB: rgb(255, 139, 167)
- 用途: 按钮悬停态、强调文字、装饰元素

#### 💙 蓝色系 - 背景与天空
**天空蓝 (Sky Blue)**
- HEX: `#A8D4ED` `#A9D5EE` `#BADFF2`
- RGB: rgb(168, 212, 237)
- 用途: 主背景色、卡片背景、天空渐变
- 特点: 清新柔和,类似游戏中的天空色

**浅蓝 (Light Blue)**
- HEX: `#CDEEFF` `#D6EEFF`
- RGB: rgb(205, 238, 255)
- 用途: 浅色背景、辅助区域、渐变终点

#### 💜 紫色系 - Let's Decorate 主题
**薰衣草紫 (Lavender)**
- HEX: `#A89BC8` `#9B8FB8`
- RGB: rgb(168, 155, 200)
- 用途: 装饰系统、室内设计内容
- 特点: 优雅温柔的紫色

**淡紫色 (Light Purple)**
- HEX: `#E5E3EE` `#E6E4EF`
- RGB: rgb(229, 227, 238)
- 用途: 卡片背景、分隔区域

#### 🧡 橙色系 - Let's Explore 主题
**温暖橙 (Warm Orange)**
- HEX: `#FFB74D` `#FFA84D` `#FF9D3D`
- RGB: rgb(255, 183, 77)
- 用途: 探索系统、农场种植内容、活跃状态
- 特点: 温暖明亮,充满活力

**柔和橙 (Soft Orange)**
- HEX: `#FFCB8A` `#FFD4A3`
- RGB: rgb(255, 203, 138)
- 用途: 辅助背景、渐变

#### 💚 绿色系 - Let's Party & Nature
**清新绿 (Fresh Green)**
- HEX: `#8FD866` `#7BC850` `#6BB83D`
- RGB: rgb(143, 216, 102)
- 用途: 派对系统、自然元素、成功状态
- 特点: 明亮活泼的草绿色

**森林绿 (Forest Green)**
- HEX: `#5A8F35` `#4A7B28`
- RGB: rgb(90, 143, 53)
- 用途: 树木、植物、深色绿植

### 中性色系统

#### 白色系
**纯白 (Pure White)**
- HEX: `#FFFFFF`
- 用途: 卡片背景、文本背景、主要内容区

**米白 (Off White)**
- HEX: `#FEF9F3` `#FFF8F0`
- RGB: rgb(254, 249, 243)
- 用途: 温暖的背景色,页面底色

**奶油色 (Cream)**
- HEX: `#EFE7D2` `#F0E8D1`
- RGB: rgb(239, 231, 210)
- 用途: 装饰场景背景、复古风格区域

#### 深色系
**深紫灰 (Deep Purple Gray)**
- HEX: `#4A3B5C` `#3D2F4A`
- RGB: rgb(74, 59, 92)
- 用途: 主要文本、标题

**温暖棕 (Warm Brown)**
- HEX: `#8B6A4D` `#7A5838`
- RGB: rgb(139, 106, 77)
- 用途: 木质元素、室内装饰

### 特殊色彩

#### 发光/高光色
**金色高光 (Gold Glow)**
- HEX: `#FFEAA7` `#FFE066`
- 用途: 闪光效果、星星、特殊物品

**青色光效 (Cyan Glow)**
- HEX: `#6FDDFF` `#5DD3FF`
- 用途: 水面反光、魔法效果

---

## ✏️ 字体系统

### 主标题字体 (Display Font)
最新版本：改为Quicksand，family也要相应改

特点:
- 圆润、可爱、友好
- 粗体版本有肉感
- 类似游戏中"Let's Dress Up"的风格
- 字母轮廓柔和无尖角

```css
font-family: 'Fredoka', 'Baloo 2', 'Varela Round', 'Comic Sans MS', sans-serif;
font-weight: 600-700;
letter-spacing: 0.02em;
```

CSS示例:
```css
.game-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 48px;
  color: #FF9AB0;
  text-shadow: 0 4px 8px rgba(255, 154, 176, 0.3);
  letter-spacing: 0.02em;
}
```

### 正文字体 (Body Font)
**推荐**: **Inter** / **Nunito** / **Poppins** (圆润版本)

特点:
- 清晰易读
- 稍微圆润但保持专业
- 适合长文本阅读

```css
font-family: 'Nunito', 'Inter', 'Poppins', -apple-system, sans-serif;
font-weight: 400-600;
line-height: 1.6;
```

### 字体使用规范

#### 标题层级
```css
/* H1 - 页面主标题 */
h1 {
  font-family: 'Fredoka', sans-serif;
  font-size: 56px;
  font-weight: 700;
  color: #FF9AB0;
  line-height: 1.2;
}

/* H2 - 区块标题 */
h2 {
  font-family: 'Fredoka', sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: #A8D4ED;
  line-height: 1.3;
}

/* H3 - 小节标题 */
h3 {
  font-family: 'Fredoka', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #4A3B5C;
  line-height: 1.4;
}

/* 正文 */
body, p {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #5A4B6A;
  line-height: 1.6;
}

/* 按钮文字 */
button {
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.03em;
}
```

### 文字效果

#### 描边效果 (类似游戏标题)
```css
.outlined-text {
  color: #FFFFFF;
  text-shadow: 
    -2px -2px 0 #FF9AB0,
     2px -2px 0 #FF9AB0,
    -2px  2px 0 #FF9AB0,
     2px  2px 0 #FF9AB0,
     0 4px 12px rgba(255, 154, 176, 0.4);
}
```

#### 柔和阴影
```css
.soft-shadow {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

---

## 🎯 UI组件设计规范

### 按钮设计

#### 主要按钮 (Primary Button)
```css
.btn-primary {
  background: linear-gradient(135deg, #FF9AB0 0%, #FF7B9C 100%);
  color: #FFFFFF;
  padding: 14px 32px;
  border-radius: 50px; /* 完全圆角 */
  border: none;
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(255, 154, 176, 0.35);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 28px rgba(255, 154, 176, 0.45);
  background: linear-gradient(135deg, #FFAAC0 0%, #FF8BAC 100%);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
  box-shadow: 0 4px 12px rgba(255, 154, 176, 0.3);
}
```

#### 次要按钮 (Secondary Button)
```css
.btn-secondary {
  background: #FFFFFF;
  color: #FF9AB0;
  padding: 14px 32px;
  border-radius: 50px;
  border: 3px solid #FF9AB0;
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(255, 154, 176, 0.2);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #FFF5F8;
  transform: translateY(-2px);
}
```

#### 按钮变体 - 不同主题
```css
/* 蓝色主题 - 探索/信息 */
.btn-blue {
  background: linear-gradient(135deg, #A8D4ED 0%, #8FC4DD 100%);
  color: #FFFFFF;
}

/* 橙色主题 - 探索/农场 */
.btn-orange {
  background: linear-gradient(135deg, #FFB74D 0%, #FF9D3D 100%);
  color: #FFFFFF;
}

/* 绿色主题 - 派对/成功 */
.btn-green {
  background: linear-gradient(135deg, #8FD866 0%, #7BC850 100%);
  color: #FFFFFF;
}

/* 紫色主题 - 装饰/高级 */
.btn-purple {
  background: linear-gradient(135deg, #A89BC8 0%, #9B8FB8 100%);
  color: #FFFFFF;
}
```

### 卡片设计

#### 标准卡片
```css
.card {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 
    0 8px 24px rgba(168, 212, 237, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.05);
  border: 3px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 32px rgba(168, 212, 237, 0.25),
    0 4px 12px rgba(0, 0, 0, 0.08);
}
```

#### 角色卡片 (类似游戏中的角色展示)
```css
.character-card {
  background: linear-gradient(180deg, #E6F4FF 0%, #FFFFFF 100%);
  border-radius: 20px;
  padding: 16px;
  border: 4px solid #FFFFFF;
  box-shadow: 0 6px 20px rgba(168, 212, 237, 0.3);
  position: relative;
  overflow: hidden;
}

.character-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, #FF9AB0 0%, #A8D4ED 50%, #FFB74D 100%);
}

.character-card img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 12px;
}

.character-card .name {
  font-family: 'Fredoka', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #4A3B5C;
  text-align: center;
}
```

### 图标系统

#### 风格要求
- **圆润**: 所有图标使用圆角,避免尖锐边角
- **简洁**: 线条简单清晰,2-3px描边
- **柔和**: 使用柔和的颜色,避免高对比度

#### 图标集推荐
- **Phosphor Icons** (Duotone 或 Fill 样式)
- **Iconoir** (圆润版本)
- **Tabler Icons** (Rounded 变体)
- 或自定义设计与游戏风格匹配的图标

```css
.icon {
  width: 32px;
  height: 32px;
  fill: #FF9AB0;
  stroke-width: 2px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.icon:hover {
  fill: #FFB5C5;
  transform: scale(1.1) rotate(5deg);
}
```

### 输入框设计

```css
.input-field {
  background: #FFFFFF;
  border: 3px solid #E6F4FF;
  border-radius: 16px;
  padding: 14px 20px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  color: #4A3B5C;
  transition: all 0.3s ease;
  outline: none;
}

.input-field:focus {
  border-color: #A8D4ED;
  box-shadow: 0 0 0 4px rgba(168, 212, 237, 0.2);
}

.input-field::placeholder {
  color: #B8A8C8;
  opacity: 0.7;
}
```

### 标签/徽章设计

```css
.badge {
  display: inline-block;
  background: linear-gradient(135deg, #FFB5C5 0%, #FFA4B6 100%);
  color: #FFFFFF;
  padding: 6px 16px;
  border-radius: 20px;
  font-family: 'Fredoka', sans-serif;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(255, 181, 197, 0.3);
  letter-spacing: 0.02em;
}

/* 不同颜色变体 */
.badge-blue { background: linear-gradient(135deg, #A8D4ED 0%, #8FC4DD 100%); }
.badge-orange { background: linear-gradient(135deg, #FFB74D 0%, #FF9D3D 100%); }
.badge-green { background: linear-gradient(135deg, #8FD866 0%, #7BC850 100%); }
.badge-purple { background: linear-gradient(135deg, #A89BC8 0%, #9B8FB8 100%); }
```

---

## 🌊 布局与间距

### 网格系统
- 使用 **12列网格**
- 最大容器宽度: **1280px**
- 响应式断点:
  - 移动: < 640px
  - 平板: 640px - 1024px
  - 桌面: > 1024px

### 间距系统
```css
/* 基础间距单位 8px */
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--spacing-2xl: 64px;
--spacing-3xl: 96px;
```

### 圆角系统
```css
--radius-sm: 8px;   /* 小元素 */
--radius-md: 16px;  /* 卡片 */
--radius-lg: 24px;  /* 大卡片 */
--radius-xl: 32px;  /* Hero区域 */
--radius-full: 9999px; /* 按钮、徽章 */
```

---

## ✨ 交互与动画

### 动画原则
1. **轻盈感**: 所有动画都应该感觉轻快、活泼
2. **弹性**: 使用缓动函数增加可爱感
3. **微动效**: 小而频繁的反馈比大而罕见的更好
4. **不干扰**: 动画应该增强而非干扰用户体验

### 缓动函数
```css
:root {
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-soft: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

### 悬停效果

#### 卡片悬停
```css
.card-hover {
  transition: all 0.4s var(--ease-soft);
}

.card-hover:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 40px rgba(168, 212, 237, 0.3);
}
```

#### 按钮悬停
```css
.btn-hover {
  transition: all 0.3s var(--ease-bounce);
  position: relative;
}

.btn-hover:hover {
  transform: translateY(-3px) scale(1.05);
}

.btn-hover:active {
  transform: translateY(0) scale(0.95);
}
```

#### 图标悬停 (可爱的旋转+缩放)
```css
.icon-hover {
  transition: transform 0.3s var(--ease-bounce);
}

.icon-hover:hover {
  transform: scale(1.15) rotate(10deg);
}
```

### 页面加载动画

#### 淡入动画
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s var(--ease-soft) forwards;
}
```

#### 闪光效果 (类似游戏中的星星)
```css
@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

.sparkle {
  animation: sparkle 1.5s var(--ease-soft) infinite;
}

/* 多个闪光点,错开时间 */
.sparkle:nth-child(2) { animation-delay: 0.3s; }
.sparkle:nth-child(3) { animation-delay: 0.6s; }
.sparkle:nth-child(4) { animation-delay: 0.9s; }
```

#### 浮动动画 (漂浮感)
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.float-element {
  animation: float 3s ease-in-out infinite;
}
```

#### 脉冲效果 (通知、提醒)
```css
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 154, 176, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(255, 154, 176, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 154, 176, 0);
  }
}

.pulse-notification {
  animation: pulse 2s infinite;
}
```

### 滚动触发动画

使用 Intersection Observer API 或类似库实现滚动触发:

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s var(--ease-soft);
}

.scroll-reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* 错开显示 */
.scroll-reveal:nth-child(1) { transition-delay: 0.1s; }
.scroll-reveal:nth-child(2) { transition-delay: 0.2s; }
.scroll-reveal:nth-child(3) { transition-delay: 0.3s; }
```

---

## 🖼️ 图片与插图

### 图片风格要求

#### 游戏截图
- **比例**: 16:9 或 1:1
- **圆角**: 16-24px
- **边框**: 3-4px 白色或浅色边框
- **阴影**: 柔和的投影增加深度

```css
.game-screenshot {
  border-radius: 20px;
  border: 4px solid #FFFFFF;
  box-shadow: 0 8px 24px rgba(168, 212, 237, 0.3);
  transition: transform 0.3s ease;
}

.game-screenshot:hover {
  transform: scale(1.05);
}
```

#### 角色插图
- **风格**: 3D渲染或2D手绘,保持游戏可爱风格
- **背景**: 透明PNG或简单渐变背景
- **姿态**: 活泼、友好的动作

#### 装饰性插图
- **使用场景**: 页面分隔、空状态、404页面
- **风格**: 简化的游戏元素(如小房子、树木、心形、星星)
- **颜色**: 使用品牌配色方案

### 图片优化
- 格式: WebP (备用 JPG/PNG)
- 最大文件大小: 200KB
- 使用懒加载

---

## 🎭 特殊元素设计

### Hero区域 (首页顶部)

```css
.hero-section {
  background: linear-gradient(180deg, #E6F4FF 0%, #FFFFFF 100%);
  padding: 80px 20px;
  border-radius: 0 0 48px 48px;
  position: relative;
  overflow: hidden;
}

/* 装饰性背景元素 */
.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 181, 197, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -15%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(168, 212, 237, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 10s ease-in-out infinite reverse;
}
```

### 分节标题 (Section Headers)

```css
.section-header {
  position: relative;
  text-align: center;
  margin: 60px 0 40px;
}

.section-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #FF9AB0;
  display: inline-block;
  position: relative;
  z-index: 1;
}

/* 装饰性下划线 */
.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 12px;
  background: linear-gradient(90deg, transparent 0%, #A8D4ED 50%, transparent 100%);
  border-radius: 6px;
  z-index: -1;
}

.section-subtitle {
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  color: #7A6A8A;
  margin-top: 12px;
}
```

### 导航栏

```css
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 3px solid rgba(168, 212, 237, 0.3);
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  box-shadow: 0 4px 20px rgba(168, 212, 237, 0.2);
}

.nav-logo {
  height: 40px;
  width: auto;
  transition: transform 0.3s ease;
}

.nav-logo:hover {
  transform: scale(1.1) rotate(-5deg);
}

.nav-link {
  font-family: 'Fredoka', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #4A3B5C;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  background: #FFF5F8;
  color: #FF9AB0;
  transform: translateY(-2px);
}

.nav-link.active {
  background: linear-gradient(135deg, #FF9AB0 0%, #FF7B9C 100%);
  color: #FFFFFF;
}
```

### Footer设计

```css
.footer {
  background: linear-gradient(180deg, #FFFFFF 0%, #F5F8FF 100%);
  padding: 60px 32px 32px;
  border-top: 3px solid rgba(168, 212, 237, 0.3);
  margin-top: 100px;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-logo {
  width: 120px;
  margin-bottom: 20px;
}

.footer-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #4A3B5C;
  margin-bottom: 16px;
}

.footer-link {
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  color: #7A6A8A;
  text-decoration: none;
  display: block;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #FF9AB0;
  transform: translateX(4px);
}

.footer-social {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #A8D4ED 0%, #8FC4DD 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s var(--ease-bounce);
}

.social-icon:hover {
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 8px 16px rgba(168, 212, 237, 0.4);
}

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 2px solid rgba(168, 212, 237, 0.2);
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #9A8AAA;
}
```

### 模态框/弹窗

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 59, 92, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: #FFFFFF;
  border-radius: 32px;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(168, 212, 237, 0.4);
  animation: scaleIn 0.4s var(--ease-bounce);
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  background: #FFF5F8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: #FF9AB0;
  transform: rotate(90deg);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## 📱 响应式设计

### 移动端优化

#### 触摸友好
- 最小点击区域: **44x44px**
- 按钮间距: 最少 **16px**
- 文字大小: 最少 **16px** (避免缩放)

#### 移动端布局调整
```css
@media (max-width: 640px) {
  /* 标题缩小 */
  h1 { font-size: 36px; }
  h2 { font-size: 28px; }
  h3 { font-size: 22px; }
  
  /* 间距减小 */
  .section { padding: 40px 20px; }
  
  /* 按钮全宽 */
  .btn-primary, .btn-secondary {
    width: 100%;
    padding: 16px;
  }
  
  /* 卡片调整 */
  .card {
    border-radius: 20px;
    padding: 20px;
  }
  
  /* 导航栏调整为汉堡菜单 */
  .navbar {
    padding: 12px 20px;
  }
}
```

---

## 🎨 主题页面设计建议

### 首页 (Homepage)

**结构**:
1. **Hero区域**: 大标题 + 主视觉图 + 主CTA按钮
2. **游戏特色**: 4个核心玩法卡片 (换装/装饰/探索/派对)
3. **最新更新**: 时间线或卡片展示
4. **社区亮点**: 玩家作品展示
5. **下载CTA**: 突出的下载按钮区域

**配色**: 使用天空蓝背景,点缀粉色和橙色元素

### 攻略页面 (Guides)

**结构**:
1. **侧边栏导航**: 固定分类菜单
2. **内容卡片**: 每个攻略一个卡片
3. **搜索栏**: 突出的搜索功能
4. **标签过滤**: 多色标签系统

**配色**: 白色背景为主,用不同颜色标签区分内容类型

### 角色资料页 (Characters)

**结构**:
1. **角色网格**: 卡片网格布局
2. **详情弹窗**: 点击查看角色详情
3. **筛选器**: 按类型/稀有度筛选

**配色**: 每个角色卡片用渐变边框,配合角色主题色

### 物品图鉴 (Items Database)

**结构**:
1. **分类标签页**: 服装/家具/工具等
2. **网格展示**: 物品图标网格
3. **详情视图**: 侧滑或模态框显示详情

**配色**: 根据物品类别使用不同主题色

---

## 🔧 技术实现建议

### CSS变量系统

```css
:root {
  /* 颜色 */
  --color-pink-primary: #FF9AB0;
  --color-pink-light: #FFB5C5;
  --color-blue-primary: #A8D4ED;
  --color-blue-light: #CDEEFF;
  --color-orange-primary: #FFB74D;
  --color-green-primary: #8FD866;
  --color-purple-primary: #A89BC8;
  
  /* 中性色 */
  --color-white: #FFFFFF;
  --color-cream: #FEF9F3;
  --color-text-dark: #4A3B5C;
  --color-text-light: #7A6A8A;
  
  /* 间距 */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 64px;
  
  /* 圆角 */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
  
  /* 阴影 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8px 24px rgba(168, 212, 237, 0.15);
  --shadow-lg: 0 16px 40px rgba(168, 212, 237, 0.25);
  
  /* 字体 */
  --font-display: 'Fredoka', 'Baloo 2', sans-serif;
  --font-body: 'Nunito', 'Inter', sans-serif;
  
  /* 缓动 */
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-soft: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  
  /* 动画时长 */
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.5s;
}
```

### 推荐技术栈

**前端框架**:
- React / Next.js (推荐用于SEO)
- Vue / Nuxt.js
- Svelte / SvelteKit

**UI库** (可选,但需大量定制):
- Tailwind CSS (配合自定义配置)
- 或完全自定义CSS

**动画库**:
- Framer Motion (React)
- GSAP (通用)
- Anime.js (轻量级)

**图标**:
- Phosphor Icons
- Iconoir
- 或自定义SVG图标

---

## ✅ 设计检查清单

在完成设计前,确保:

### 视觉一致性
- [ ] 所有元素使用圆角 (避免尖锐边角)
- [ ] 配色方案遵循游戏风格 (柔和马卡龙色)
- [ ] 字体使用 Fredoka/Baloo 等圆润字体
- [ ] 阴影柔和自然,避免生硬

### 交互体验
- [ ] 所有可点击元素有悬停效果
- [ ] 悬停动画使用弹性缓动
- [ ] 移动端触摸区域足够大 (≥44px)
- [ ] 加载状态有友好提示

### 性能优化
- [ ] 图片使用WebP格式
- [ ] 启用懒加载
- [ ] CSS动画使用 transform/opacity (GPU加速)
- [ ] 避免过度复杂的动画

### 可访问性
- [ ] 颜色对比度符合 WCAG AA 标准
- [ ] 所有图片有 alt 文本
- [ ] 键盘可导航
- [ ] 使用语义化HTML

### 响应式
- [ ] 在移动/平板/桌面测试
- [ ] 文字在小屏幕可读
- [ ] 触摸友好 (移动端)
- [ ] 横竖屏都适配

---

## 🎯 设计示例代码片段

### 完整按钮组件

```jsx
// React组件示例
const GameButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick 
}) => {
  const styles = {
    primary: {
      background: 'linear-gradient(135deg, #FF9AB0 0%, #FF7B9C 100%)',
      color: '#FFFFFF',
    },
    secondary: {
      background: '#FFFFFF',
      color: '#FF9AB0',
      border: '3px solid #FF9AB0',
    },
    orange: {
      background: 'linear-gradient(135deg, #FFB74D 0%, #FF9D3D 100%)',
      color: '#FFFFFF',
    },
    blue: {
      background: 'linear-gradient(135deg, #A8D4ED 0%, #8FC4DD 100%)',
      color: '#FFFFFF',
    },
  };

  return (
    <button
      className={`game-button game-button-${variant} game-button-${size}`}
      onClick={onClick}
      style={styles[variant]}
    >
      {children}
    </button>
  );
};

// 对应CSS
.game-button {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 8px 20px rgba(255, 154, 176, 0.3);
}

.game-button-medium {
  padding: 14px 32px;
  font-size: 18px;
}

.game-button-small {
  padding: 10px 24px;
  font-size: 16px;
}

.game-button-large {
  padding: 18px 40px;
  font-size: 20px;
}

.game-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 28px rgba(255, 154, 176, 0.45);
}

.game-button:active {
  transform: translateY(0) scale(0.98);
}
```

### 完整卡片组件

```jsx
const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-card-image">
        <img 
          src={character.image} 
          alt={character.name}
          loading="lazy"
        />
        {character.isNew && (
          <span className="badge badge-new">NEW</span>
        )}
      </div>
      <div className="character-card-content">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-description">{character.description}</p>
        <div className="character-tags">
          {character.tags.map(tag => (
            <span key={tag} className={`badge badge-${tag.type}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 对应CSS
.character-card {
  background: linear-gradient(180deg, #E6F4FF 0%, #FFFFFF 100%);
  border-radius: 20px;
  padding: 16px;
  border: 4px solid #FFFFFF;
  box-shadow: 0 6px 20px rgba(168, 212, 237, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  overflow: hidden;
  position: relative;
}

.character-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, 
    #FF9AB0 0%, 
    #A8D4ED 33%, 
    #FFB74D 66%, 
    #8FD866 100%);
}

.character-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 32px rgba(168, 212, 237, 0.4);
}

.character-card-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
}

.character-card-image img {
  width: 100%;
  height: auto;
  display: block;
}

.badge-new {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #FF9AB0 0%, #FF7B9C 100%);
  color: #FFFFFF;
  padding: 6px 12px;
  border-radius: 20px;
  font-family: 'Fredoka', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(255, 154, 176, 0.4);
  animation: pulse 2s infinite;
}

.character-name {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #4A3B5C;
  margin: 0 0 8px 0;
  text-align: center;
}

.character-description {
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #7A6A8A;
  line-height: 1.5;
  margin: 0 0 12px 0;
  text-align: center;
}

.character-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
```

---

## 📚 资源链接

### 字体下载
- **Fredoka**: [Google Fonts](https://fonts.google.com/specimen/Fredoka)
- **Baloo 2**: [Google Fonts](https://fonts.google.com/specimen/Baloo+2)
- **Nunito**: [Google Fonts](https://fonts.google.com/specimen/Nunito)
- **Varela Round**: [Google Fonts](https://fonts.google.com/specimen/Varela+Round)

### 图标资源
- **Phosphor Icons**: https://phosphoricons.com
- **Iconoir**: https://iconoir.com
- **Tabler Icons**: https://tabler-icons.io

### 工具推荐
- **配色工具**: Coolors, Adobe Color
- **设计工具**: Figma, Sketch, Adobe XD
- **原型工具**: Framer, ProtoPie
- **动画工具**: Principle, Lottie

---

## 🚀 最后的提醒

创建Heartopia网站时,请始终记住:

1. **保持可爱但不幼稚**: 风格可爱,但布局和功能要专业
2. **柔和优于鲜艳**: 所有颜色都应该是柔和的马卡龙色调
3. **圆润优于尖锐**: 避免任何尖锐的边角和线条
4. **轻快优于沉重**: 动画要轻盈,视觉要通透
5. **游戏感优于商业感**: 保持游戏的趣味性和亲和力

**核心目标**: 让访问者一眼就能感受到"这就是Heartopia的官网",视觉风格与游戏完美统一,给玩家带来连贯的品牌体验。

---

**版本**: v1.0  
**更新日期**: 2026年1月  
**维护者**: Heartopia设计团队

祝你设计出完美匹配游戏风格的网站! 🎨✨