import i1G9ydwtdNrlqcE from "../../assets/images/i1G9ydwtdNrlqcE.webp";
import i1ULIP9pKpM3az from "../../assets/images/i1ULIP9pKpM3az.webp";
import i1mnNo0ACc1SrEE from "../../assets/images/i1mnNo0ACc1SrEE.webp";
const AntiRollBars1 = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>防倾杆 1</h1>
        <h2>车辆设置 3</h2>
      </div>
      <div className="body">
        <h3 className="section-header">通过防倾杆（稳定杆）调整转向特性</h3>
        <p>
接下来是防倾杆（也称为防摆杆、稳定杆）的调整。安装在汽车四个车轮上的弹簧在俯仰和滚动方向上都起作用，但连接左右车轮的U形弹簧是仅在汽车滚动方向上起作用的弹簧，旨在减少滚动量。</p>
        <p className="image"><img alt="" src={ i1G9ydwtdNrlqcE }/></p>
        <p className="caption">图3-1 纽博格林的北环。阿登纳森林附近汽车的滚动。</p>
        <p>
因此，使用两种类型的弹簧，即悬挂弹簧和防倾杆，来产生对滚动的抵抗力。这决定了汽车的滚动刚度。防倾杆的一般应用通常涉及使用弹簧设置自然频率，然后使用防倾杆进行最后的调整，添加一个额外的弹簧以抑制滚动运动。</p>
        <p className="image"><img alt="" src={ i1ULIP9pKpM3az }/></p>
        <p className="caption">图3-2 防倾杆（稳定杆）</p>
        <p>
通过使用这些防倾杆改变前后滚动刚度，可以调整汽车的转向特性（转向平衡），微调转向不足或转向过度的程度。</p>
        <p>
最后，提高前部的滚动刚度（在前部使用更硬的防倾杆）将使汽车更倾向于转向不足，而提高后部的滚动刚度将使汽车更倾向于转向过度。为什么？这有点复杂，但让我们来详细说明。</p>
        <p>
首先想象一下，前后滚动刚度不同的汽车进入一个弯道并开始滚动：现在汽车的外侧车轮上承受了更多的负载。</p>
        <p>
重要的是接下来发生的事情。当汽车在转弯力的影响下滚动时，如果前轮的滚动刚度与后轮的滚动刚度不同，则需要前后不同的滚动角。然而，汽车是一个刚体，不会扭曲——所以即使前后滚动刚度不同，前后滚动角也将保持相同。结果是，滚动刚度更大的那一侧将承受比滚动刚度较小的那一侧更多的滚动力。原因是滚动刚度更大的一侧（即弹簧更强的一侧）和滚动刚度较小的一侧（即弹簧较弱的一侧）将在相同的滚动角下被压缩相同的量。这意味着更强的弹簧实际上承受的负载比较弱的弹簧更大。我们将在下一页继续解释。</p>
        <p className="image"><img alt="" src={ i1mnNo0ACc1SrEE }/></p>
        <p className="caption">图3-3 德国悬挂制造商KW的七柱试验台下方。可以在此设施进行多种振动分析</p>
      </div>
    </div>
  </>
);
export default AntiRollBars1;
