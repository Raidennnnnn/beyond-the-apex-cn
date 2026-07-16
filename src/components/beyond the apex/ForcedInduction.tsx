import i17B3PNFugtKThB from "../../assets/images/i17B3PNFugtKThB.webp";
import i1pajaNoJhZbu from "../../assets/images/i1pajaNoJhZbu.webp";

const ForcedInduction = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Forced Induction / 强制进气</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            An increase in the amount of air flowing into an engine will result in an increase in power. The simplest way to achieve this is by increasing engine displacement.
            <br />
            <br />
            However, a similar effect can be achieved without increasing displacement through a process known as forced induction. This involves compressing more air into the engine, allowing a greater mass of air—and therefore fuel—to enter the combustion chamber. Devices that perform this function are generally classified into two types: superchargers and turbochargers.
            <br />
            <br />
            The amount of pressure added when the intake air is compressed is known as “boost,” and increasing boost generally increases power. One unit of atmospheric pressure is approximately one bar (about 1 kg/cm²). If the boost pressure is 1 bar (gauge), the total intake pressure becomes about 2 bar absolute—one bar of atmospheric pressure plus one bar of boost—effectively doubling the air density entering the engine under ideal conditions.
            <br />
            <br />
            The drawback of forced induction is that as boost pressure increases, cylinder pressure and thermal stress on engine components rise accordingly. For this reason, engines equipped with turbochargers or superchargers are typically reinforced, and the compression ratio is often lowered to reduce the risk of abnormal combustion such as knock.
            <br />
            <br />
            When air is compressed, its temperature increases, which reduces its density and limits the amount of oxygen entering the engine. This effect becomes more pronounced under heavy load or in hot conditions, reducing potential power output. As a result, intercoolers are commonly used to cool the compressed air and restore density, improving performance and efficiency.
            <br />
            <br />
            Turbochargers take time to build boost, as they are driven by exhaust energy and there is a delay before sufficient pressure is generated. On the other hand, superchargers, which are driven directly by the engine’s crankshaft, do not suffer from this delay, but they consume some engine power because of this mechanical drive.
            <br />
            <br />
            Engines that combine the advantages of both systems—using a supercharger at low engine speeds and a turbocharger at higher speeds—have recently attracted attention.
          </p>
          <p lang="zh">
            åå¨æºå¸å¥ç©ºæ°è¶å¤ï¼åçæåç©ºé´è¶å¤§ãæç´æ¥æ¹æ³æ¯å¢å¤§æéã
            <br />
            <br />
            ä½ä¸æ¹åæéä¹å¯è·å¾ç±»ä¼¼ææï¼å³å¼ºå¶è¿æ°ï¼å°æ´å¤ç©ºæ°åå¥åå¨æºï¼ä½¿æ´å¤ç©ºæ°ï¼åçæ²¹ï¼è¿å¥çç§å®¤ãè£ç½®å¤§è´åæºæ¢°å¢åä¸æ¶¡è½®å¢åä¸¤ç±»ã
            <br />
            <br />
            åç¼©è¿æ°æ¶çéå ååç§°å¢åååï¼boostï¼ãå¤§æ°åçº¦1 barï¼çº¦1 kg/cmÂ²ï¼ãå¢å1 baræ¶ï¼ç»å¯¹è¿æ°ååçº¦2 barï¼çæ³æ¡ä»¶ä¸è¿å¥åå¨æºçç©ºæ°çº¦å åã
            <br />
            <br />
            å¢åè¶é«ï¼ç¼¸åä¸é¨ä»¶ç­è´è·è¶å¤§ï¼æå¢ååå¨æºå¸¸å¼ºååé¨ä»¶å¹¶éä½åç¼©æ¯ä»¥æå¶çéã
            <br />
            <br />
            ç©ºæ°åç¼©ä¼åæ¸©ãå¯åº¦ä¸éï¼é«è´è·æå¤å­£æ´ææ¾ï¼éå¶è¾åºãæä¸­å·å¨å·å´å¢åç©ºæ°å·²æå¸¸è§ã
            <br />
            <br />
            æ¶¡è½®å¢åé ææ°é©±å¨ï¼å»ºç«å¢åææ»åï¼æ¶¡è½®è¿æ»ï¼ï¼æºæ¢°å¢åç±æ²è½´é©±å¨ï¼æ è¿æ»ä½æ¶èé¨ååå¨æºåçã
            <br />
            <br />
            è¿å¹´ä¹æä½è½¬éç¨æºæ¢°å¢åãé«è½¬éç¨æ¶¡è½®ï¼å¼é¡¾ä¸¤èä¼ç¹çå¢ååå¨æºã
          </p>
        </div>

        <h3>
          Superchargers / 机械增压器
        </h3>

        <div className="bilingual">
          <p lang="en">
            A supercharger is a compressor, usually driven by a belt connected to the crankshaft, that compresses air before it enters the engine. Because it is driven directly by the crankshaft, it provides strong boost at low engine speeds and offers quicker throttle response compared with a turbocharger. A supercharger also tends to perform well in vehicles with automatic transmissions. The illustration here shows a “Roots” type supercharger, but several other types exist, including Lysholm (twin-screw) compressors and scroll-type designs.
          </p>
          <p lang="zh">
            由曲轴经皮带等驱动压缩机，压缩空气供入发动机。低转速增压效果好、油门响应快，与自动变速箱相性也好。图示为罗茨鼓风机型，另有螺杆型、涡旋型等。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1pajaNoJhZbu} />
        </p>

        <h3>
          Turbochargers / 涡轮增压器
        </h3>

        <div className="bilingual">
          <p lang="en">
            Named “turbo” after the turbine that drives its compressor, a turbocharger uses exhaust gases to spin the turbine and compress intake air. Because it recovers energy from the exhaust, it does not draw power directly from the engine as a supercharger does, improving efficiency at higher engine speeds. However, at low engine speeds where exhaust flow is limited, the turbine may not reach operating speed, and it takes time to build boost as the turbine “spools up” during acceleration. This momentary delay in response is known as “turbo lag.” Various technologies have been developed to reduce this effect, and they continue to evolve. In Europe, turbochargers are increasingly used with smaller engines to improve fuel economy.
          </p>
          <p lang="zh">
            “涡轮”即涡轮机：利用排气压力驱动涡轮带动压缩机增压。回收排气能量，高转速区不像机械增压那样增加驱动损失。但低转速排气能量不足时涡轮难起转，加速时需时间建立增压，即涡轮迟滞。欧洲亦常见小排量涡轮以兼顾油耗。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i17B3PNFugtKThB} />
        </p>
      </div>
    </div>
  </>
);

export default ForcedInduction;
