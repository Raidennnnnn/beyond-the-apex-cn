const EngineHorsepowerAndTorque = () => (
    <>
      <div className="manual_detail">
<div className="content_header">
<h1>发动机 – 马力和扭矩</h1>
<h2>机械 3</h2>
</div>
<div className="body">
<h3 id="$_count">决定功率输出和扭矩的三个数值</h3>
<p>
记住以下定义将有助于识别发动机的特性和性能。</p>
<h3 id="$_count">●排量</h3>
<p>
排量是指发动机可以吸入的空气量。在往复式发动机中，它等于活塞行程的气缸体积乘以气缸数量。排量越大，功率输出越高；然而，与其在每个气缸中拥有更大的容量，不如增加气缸数量更为有效。</p>
<h3 id="$_count">●最大输出</h3>
<p>
最大输出是指发动机在特定转速下可以产生的最大功率。通常以马力（HP）或千瓦（kW）为单位表示。最大输出通常在高转速下实现，因此在高转速下保持发动机的能力是提高最大输出的关键。</p>
<p>
气缸行程（行程长度）除以气缸孔径（内径）的值称为孔径/行程比。比值小于1的称为短行程，比值大于1的称为长行程。比值正好为1的称为方形。</p>
<p className="image"><img alt="" src="images\i1GwuTh5bCoyrcE.jpg"/></p>
<p className="caption">图3-3 孔径/行程比（内径 x 行程）</p>
<h3 id="$_count">●压缩比</h3>
<p>
这是一个表示发动机吸入的燃料/空气混合物被压缩程度的数值。这是决定发动机热效率和输出的重要变量。</p>
<p>
压缩比可以通过将活塞在最低位置（也称为下止点或BDC）时的气缸最大体积除以活塞在最高位置（也称为上止点或TDC）时的最小气缸体积（也称为燃烧室体积）来计算。例如，假设一台2000cc四缸发动机中单个气缸的排量为500cc，如果燃烧室体积在TDC时为50cc，你将500+50=550cc除以50cc燃烧室体积，得到压缩比为11:1。</p>
<p className="image"><img alt="" src="images\i1AQgTkEur1pAW.jpg"/></p>
<p className="caption">图3-4 压缩比</p>
</div>
</div>

    </>
  );

  export default EngineHorsepowerAndTorque;
  