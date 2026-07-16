import i1C4XGXVPwo7gb from "../../assets/images/i1C4XGXVPwo7gb.webp";
import i1elqFN0sIDl9G from "../../assets/images/i1elqFN0sIDl9G.webp";
import i13fvk02sgoB78E from "../../assets/images/i13fvk02sgoB78E.webp";
import i1kqNsP2CP9ptG from "../../assets/images/i1kqNsP2CP9ptG.webp";

const ResonancePhenomenon = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-4：共振现象</h1>
        <h2>共振是对外部激励几乎无抵抗的状态</h2>
      </div>
      <div className="body">
        <p>
          思考悬架或发动机振动时，尤其需要注意共振这一现象。应尽可能避免共振；即便不得已发生，也必须尽量减小其影响。为此，先来理解共振是什么。
        </p>

        <p className="image"><img alt="" src={ i1C4XGXVPwo7gb } /></p>
        <p className="caption">图1-4-1：让系统自由振动时，它会以固有频率振动，而不会以其他频率振动</p>

        <h3 className="section-header">■ 自由振动与固有频率</h3>

        <p>
          仍考虑一组重物与弹簧组成的振动系统。把它拉开后放开，让它自由振动，这叫自由振动。最终重物与弹簧会以某一固定频率振动。无论起初怎样拉，最终都会以这一固定频率振动。该频率只由弹簧弹性与重物质量决定，是振动系统固有的频率，称为固有频率。固有频率是振动系统自发振动的频率；以此频率振动时，弹簧弹性力与重物惯性力始终平衡，能量交换也会自然地反复进行。
        </p>

        <p className="image"><img alt="" src={ i1elqFN0sIDl9G } /></p>
        <p className="caption">图1-4-2：若试图以固有频率以外的频率拉伸弹簧，振动系统仍会试图以自身固有频率伸缩，这种运动作为阻力传到手上</p>

        <h3 className="section-header">■ 强制振动与共振</h3>

        <p>
          用手强制该弹簧与重物伸缩，这叫强制振动。以不同于固有频率的频率伸缩时，手上应能感到阻力。若认为固有频率是该系统“自然”的振动频率，那么其余频率对该系统就是“不自然”的。无论外部怎样激励，系统总想以对自己自然的频率振动，于是就会感到阻力。
        </p>

        <p className="image"><img alt="" src={ i13fvk02sgoB78E } /></p>
        <p className="caption">图1-4-3：以固有频率施加振动时，系统不会反抗手的运动，反而吸收手的动能并增大振幅。这就是共振</p>

        <p>
          若以该系统的固有频率使其伸缩会怎样？此时频率对系统是自然的，因此感觉不到阻力；振幅反而会随所加振动一起变大。这是因为系统对外部激励几乎不抵抗，反而把能量全部吸收。若持续以固有频率激励，振幅会不断增大。
          <br /><br />
          像这样，在振动系统自发振动的频率上被外部强制振动、振幅持续增大的现象称为「共振」，此时的频率称为「共振频率」。
          <br /><br />
          例如在悬架上，共振会恶化接地性与舒适性；发动机共振则可能导致发动机损坏。因此必须避免共振。防止共振破坏的方法之一是安装减震器：减震器从重物与弹簧吸收振动能量，转化为热能并向外耗散。即便发生共振，只要阻尼力充分作用，也能防止机械损坏。
        </p>

        <p className="image"><img alt="" src={ i1kqNsP2CP9ptG } /></p>
        <p className="caption">图1-4-4：发动机也可看作因连续燃烧而振动的一种振动系统。发动机共振会给缸盖、缸体等带来严重损伤</p>

        <p>
          以上说明里，固有频率与共振频率看起来像同一件事，其实并非如此。固有频率由质量与弹簧弹性决定；共振频率则是在此基础上再加上阻尼力这一要素。若系统没有阻尼力，二者一致；存在阻尼力时，共振频率变低，与固有频率不再一致。不过，有时也会把不带阻尼的共振频率（固有频率）称为无阻尼固有频率，把带阻尼的共振频率称为有阻尼固有频率。
        </p>
      </div>
    </div>
  </>
);

export default ResonancePhenomenon;
