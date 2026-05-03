<template>
  <div class="cancer-guide-wrapper bg-[#fafafa] dark:bg-[#121212] min-h-screen text-gray-800 dark:text-gray-200 font-sans pb-20">
    
    <!-- Hero Section -->
    <header class="relative overflow-hidden py-24 md:py-32 bg-white dark:bg-[#18181b] border-b border-gray-100 dark:border-gray-800">
      <div class="absolute inset-0 bg-gradient-to-br from-[#E0F7FA] via-white to-[#FCE4EC] dark:from-[#006064] dark:via-[#18181b] dark:to-[#880E4F] opacity-40"></div>
      
      <div class="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-sm font-medium mb-8">
          <div class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
          科学认知，构筑健康防线
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300">癌症揭秘</span>：发展、治疗与规避指南
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          癌症并非突然降临的噩梦，而是一场长期的演变。了解它的规律，掌握科学的预防与筛查方法，我们将化被动为主动，掌控生命的健康主动权。
        </p>
      </div>
    </header>

    <main class="max-w-[1200px] mx-auto px-6 mt-[-40px] relative z-20 space-y-16">
      
      <!-- 一、癌症发展过程 (Cards) -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <div class="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-xl text-teal-600 dark:text-teal-400">
            <div class="i-carbon-microscope text-2xl"></div>
          </div>
          <h2 class="text-3xl font-bold">第一部分：癌症是如何发展的？</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-[#1e1e20] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div class="text-4xl font-black text-gray-200 dark:text-gray-800 mb-2">01</div>
            <h3 class="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">基因突变</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">在这个“诱发阶段”，细胞DNA在分裂中发生错误未能被免疫系统修复，或者受到辐射、致癌化学物质刺激，导致原癌基因或抑癌基因突变累积。</p>
          </div>
          <div class="bg-white dark:bg-[#1e1e20] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div class="text-4xl font-black text-gray-200 dark:text-gray-800 mb-2">02</div>
            <h3 class="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">异常增殖</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">细胞的底层规则被打破，携带错误基因的细胞不再听从身体的“停止生长”指令，开始在局部组织内无限制地疯狂复制和分裂。</p>
          </div>
          <div class="bg-white dark:bg-[#1e1e20] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div class="text-4xl font-black text-gray-200 dark:text-gray-800 mb-2">03</div>
            <h3 class="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">肿瘤形成</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">异常细胞聚集形成肿瘤。若是恶性肿瘤（癌症），它则没有清晰边界，生长迅速，并像树根一样侵入、破坏周围正常的器官与组织。</p>
          </div>
          <div class="bg-white dark:bg-[#1e1e20] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow border-t-4 border-t-red-500">
            <div class="text-4xl font-black text-red-100 dark:text-red-900/30 mb-2">04</div>
            <h3 class="text-xl font-bold mb-3 text-red-600 dark:text-red-400">侵袭与转移</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">最危险的阶段。脱落的癌细胞通过血液或淋巴系统“逃逸”，游走到肺、肝、骨、脑等远处器官继续生长，形成转移灶，治疗难度成倍增加。</p>
          </div>
        </div>
      </section>

      <!-- 特别关注：子宫颈癌 -->
      <section class="relative overflow-hidden bg-white dark:bg-[#18181b] rounded-3xl p-8 md:p-12 shadow-sm border border-rose-100 dark:border-rose-900/30">
        <div class="absolute top-0 right-0 w-64 h-64 bg-rose-50 dark:bg-rose-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-6">
            <span class="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">特别关注</span>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">子宫颈癌 (Cervical Cancer) 详解</h2>
          </div>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl leading-relaxed">
            子宫颈癌是女性最为常见、也最具备明确病因的恶性肿瘤。令人振奋的是，由于病因明确，它也是目前人类唯一有希望通过疫苗全面预防并消除的癌症。
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <!-- 病因与症状 -->
            <div class="space-y-6">
              <div class="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl">
                <h4 class="text-lg font-bold text-rose-700 dark:text-rose-300 mb-3 flex items-center gap-2">
                  <div class="i-carbon-warning text-xl"></div>
                  发病机制与警示症状
                </h4>
                <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <div class="i-carbon-check-mark-filled text-rose-500 mt-0.5"></div>
                    <div><strong>头号元凶 (HPV)：</strong> 几乎所有的宫颈癌都与高危型人乳头瘤病毒（HPV）的持续感染有关，特别是HPV 16型和18型导致了约70%的宫颈癌。</div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="i-carbon-check-mark-filled text-rose-500 mt-0.5"></div>
                    <div><strong>高危因素：</strong> 过早性生活、多性伴侣、多孕多产、吸烟以及免疫力低下。</div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="i-carbon-check-mark-filled text-rose-500 mt-0.5"></div>
                    <div><strong>警示症状：</strong> 早期通常无明显症状（因此筛查极重要！）。中晚期可能出现接触性出血（如同房后出血）、不规则阴道流血、白带增多且伴有恶臭等，若出现须立刻就医。</div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- TCT / HPV 筛查 -->
            <div class="space-y-6">
               <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl h-full">
                <h4 class="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <div class="i-carbon-search text-xl"></div>
                  二级预防：双管齐下的早期筛查
                </h4>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  宫颈癌从HPV感染发展为癌前病变，再到真正变成癌症，通常需要5到10年的时间。这给了我们极其充足的时间将其在这个阶段“揪出来”并治愈。
                </p>
                <div class="space-y-4">
                  <div class="bg-white dark:bg-[#1e1e20] p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/30">
                    <h5 class="font-bold text-gray-900 dark:text-white mb-1">TCT (液基薄层细胞学检查)</h5>
                    <p class="text-xs text-gray-600 dark:text-gray-400">提取宫颈表面的脱落细胞进行显微镜检测。这是筛查宫颈癌前病变的最基础、最经典方法。</p>
                  </div>
                  <div class="bg-white dark:bg-[#1e1e20] p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/30">
                    <h5 class="font-bold text-gray-900 dark:text-white mb-1">HPV 基因分型检测</h5>
                    <p class="text-xs text-gray-600 dark:text-gray-400">直接检测宫颈是否存在高危型HPV病毒感染，定位病因。通常建议30岁以上女性将 TCT 和 HPV 联合筛查作为首选。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 疫苗对比 -->
          <div class="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8">
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">一级预防：HPV 疫苗全解析</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- 二价 -->
              <div class="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-[#18181b] hover:bg-white dark:hover:bg-[#1e1e20] transition-colors">
                <div class="flex justify-between items-center mb-3">
                  <h5 class="font-bold text-lg text-gray-900 dark:text-white">二价疫苗</h5>
                </div>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong class="text-gray-800 dark:text-gray-200">预防类型：</strong> 16、18 型 (高危)</li>
                  <li><strong class="text-gray-800 dark:text-gray-200">宫颈癌预防率：</strong> ~70%</li>
                  <li><strong class="text-gray-800 dark:text-gray-200">接种年龄：</strong> 9-45岁</li>
                  <li class="mt-4 text-xs italic opacity-80 border-t border-gray-200 dark:border-gray-700 pt-2">性价比高，供应相对充足，能覆盖最危险的两类病毒。</li>
                </ul>
              </div>

              <!-- 四价 -->
              <div class="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-[#18181b] hover:bg-white dark:hover:bg-[#1e1e20] transition-colors relative">
                <div class="flex justify-between items-center mb-3">
                  <h5 class="font-bold text-lg text-gray-900 dark:text-white">四价疫苗</h5>
                </div>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong class="text-gray-800 dark:text-gray-200">预防类型：</strong> 16、18 外加 6、11 型 (低危/生殖器疣)</li>
                  <li><strong class="text-gray-800 dark:text-gray-200">宫颈癌预防率：</strong> ~70%</li>
                  <li><strong class="text-gray-800 dark:text-gray-200">接种年龄：</strong> 9-45岁</li>
                  <li class="mt-4 text-xs italic opacity-80 border-t border-gray-200 dark:border-gray-700 pt-2">在预防宫颈癌基础上，额外预防生殖器尖锐湿疣。</li>
                </ul>
              </div>

              <!-- 九价 -->
              <div class="p-5 border-2 border-[#1A73E8]/30 dark:border-[#8AB4F8]/50 rounded-xl bg-blue-50/30 dark:bg-blue-900/10 shadow-sm relative hover:shadow-md transition-shadow">
                <div class="absolute -top-3 -right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                  <div class="i-carbon-star-filled"></div> 黄金标准
                </div>
                <div class="flex justify-between items-center mb-3 mt-1">
                  <h5 class="font-bold text-lg text-[#1A73E8] dark:text-[#8AB4F8]">九价疫苗 (9-Valent)</h5>
                </div>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li><strong class="text-gray-800 dark:text-gray-200">预防类型：</strong> 覆盖二/四价外，新增 31, 33, 45, 52, 58 (高危型)</li>
                  <li><strong class="text-gray-800 dark:text-gray-200">作用描述：</strong> <span class="text-rose-600 dark:text-rose-400">强效预防宫颈癌、外阴癌、阴道癌、肛门癌及其癌前病变，同时预防生殖器疣。</span></li>
                  <li><strong class="text-gray-800 dark:text-gray-200">接种对象：</strong> <span class="text-blue-600 dark:text-blue-400 font-medium">9 - 45岁女性</span> (近年已正式扩龄)</li>
                  <li><strong class="text-gray-800 dark:text-gray-200">宫颈癌预防率：</strong> 高达 <span class="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 px-1 rounded font-bold">92%</span></li>
                  <li><strong class="text-gray-800 dark:text-gray-200">接种程序：</strong> 共3针 (通常为 0, 2, 6个月投予)</li>
                  <li class="mt-4 text-xs leading-relaxed opacity-90 border-t border-blue-200/50 dark:border-blue-800/50 pt-3">
                    <strong>🏥 专家建议：</strong>九价是目前市面上保护力最全面的一款疫苗。WHO建议，**9-14岁女孩在发生首次性行为前接种，防癌获益最大！** 即使已有性生活或已感染某种HPV，接种九价依然能预防其他未感染毒株。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 二、主流治疗方案 -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <div class="p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl text-indigo-600 dark:text-indigo-400">
            <div class="i-carbon-pills text-2xl"></div>
          </div>
          <h2 class="text-3xl font-bold">第二部分：现代癌症的主流治疗方案</h2>
        </div>
        
        <div class="grid gap-4">
          <!-- Item 1 -->
          <div class="group bg-white dark:bg-[#1e1e20] p-6 rounded-2xl flex flex-col md:flex-row gap-6 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
             <div class="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
               <div class="i-carbon-cut text-2xl text-blue-500"></div>
             </div>
             <div>
               <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">外科手术 (Surgery)</h3>
               <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">直接将肿瘤实体及周围可能受累组织切除。主要用于早期和部分中期实体肿瘤（如早期乳腺癌、肠癌）。这是治愈早期癌症最直接有效的手段。</p>
             </div>
          </div>
          
          <div class="group bg-white dark:bg-[#1e1e20] p-6 rounded-2xl flex flex-col md:flex-row gap-6 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
             <div class="w-16 h-16 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center shrink-0">
               <div class="i-carbon-radioactive text-2xl text-purple-500"></div>
             </div>
             <div>
               <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">放疗 & 化疗</h3>
               <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                 <strong class="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">放疗：</strong> 利用高能射线局部照射肿瘤，破坏癌细胞DNA。常用于术前缩瘤或局部彻底杀灭。<br/>
                 <strong class="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded mt-2 inline-block">化疗：</strong> 输注化学药物进行全身治疗，杀死快速分裂的细胞。适用于癌症全身扩散或术后辅助。其特点是较易“误伤”正常快速代谢的三大系统细胞，导致脱发、呕吐等副作用。
               </p>
             </div>
          </div>

          <div class="group bg-white dark:bg-[#1e1e20] p-6 rounded-2xl flex flex-col md:flex-row gap-6 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
             <div class="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
               <div class="i-carbon-bullseye text-2xl text-emerald-500"></div>
             </div>
             <div>
               <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">靶向治疗与免疫治疗 (前沿突破)</h3>
               <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                 <strong class="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">靶向治疗：</strong> 如同“精准导弹”，识别并锁定癌细胞表面的特定基因突变靶点进行阻断，副作用比化疗小，但容易产生耐药性。<br/>
                 <strong class="text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded mt-2 inline-block">免疫治疗：</strong> 近十年最大突破（如PD-1/PD-L1）。通过“撕下癌细胞的伪装”，重新激活患者自身的免疫T细胞去追杀癌细胞，一旦起效，能带来极长的生存期。
               </p>
             </div>
          </div>
        </div>
      </section>

      <!-- 三、通用科学规避与预防癌症 -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <div class="p-3 bg-amber-100 dark:bg-amber-900/40 rounded-xl text-amber-600 dark:text-amber-400">
            <div class="i-carbon-shield text-2xl"></div>
          </div>
          <h2 class="text-3xl font-bold">第三部分：生活中的全方位防癌指南</h2>
        </div>
        <div class="bg-white dark:bg-[#1a1a1c] rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            
            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-gray-50 dark:bg-[#202022]">
                <h4 class="font-bold flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
                  <div class="i-carbon-no-smoking text-red-500 text-lg"></div> 远离致癌物源头
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">绝对戒烟并抵抗二手烟。严格限制饮酒（酒精是一类致癌物，绝无“安全剂量”）。不吃发霉变质食物，警惕黄曲霉素。</p>
              </div>

              <div class="p-4 rounded-xl bg-gray-50 dark:bg-[#202022]">
                <h4 class="font-bold flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
                  <div class="i-carbon-apple text-green-500 text-lg"></div> 调整饮食与运动结构
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">增加蔬菜水果和全谷物摄入。减少红肉（如牛肉、猪肉）及加工肉类（培根、香肠）。保持健康体重，每周进行至少150分钟中等强度运动防范肥胖及相关炎症。</p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-gray-50 dark:bg-[#202022]">
                <h4 class="font-bold flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
                  <div class="i-carbon-vaccine text-blue-500 text-lg"></div> 积极防范感染
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">约15%的癌症来源于慢性感染。接种乙肝疫苗（防肝癌）、接种HPV疫苗（防宫颈癌），并在体检发现幽门螺杆菌后遵医嘱根治（防胃癌）。</p>
              </div>

              <div class="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-900/10">
                <h4 class="font-bold flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400">
                  <div class="i-carbon-search-advanced text-amber-500 text-lg"></div> 主动定期防癌筛查
                </h4>
                <p class="text-sm text-gray-700 dark:text-gray-400">
                  <strong class="font-semibold text-gray-900 dark:text-gray-300">肺癌：</strong> 高危吸烟者每年低剂量螺旋CT。<br/>
                  <strong class="font-semibold text-gray-900 dark:text-gray-300">肠癌：</strong> 40岁以上定期做肠镜，早裁息肉。<br/>
                  <strong class="font-semibold text-gray-900 dark:text-gray-300">乳腺癌：</strong> 定期进行乳腺超声/钼靶。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
.cancer-guide-wrapper {
  /* Hide the top navbar spacing or integrate it seamlessly if needed. 
     Using regular container so sidebar can be hidden by 'layout: page' */
}

/* Adjust layout so it spans full width naturally if using custom layout */
:deep(.VPDoc) {
  padding: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

:deep(.VPDoc .container) {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

:deep(.VPContent) {
  padding: 0 !important;
}
</style>
