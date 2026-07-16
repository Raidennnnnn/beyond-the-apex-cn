import i14dQ72NeUrNxSH from "../../assets/images/i14dQ72NeUrNxSH.webp";
import i1JeCTJnUvQuv8c from "../../assets/images/i1JeCTJnUvQuv8c.webp";
import i1LkGmHxa9yPnSH from "../../assets/images/i1LkGmHxa9yPnSH.webp";
import i1UUYdz6wpUw7O from "../../assets/images/i1UUYdz6wpUw7O.webp";

const Exposure = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Exposure / 曝光</h1>
      </div>
      <div className="body">
        <h3>
          Overexposure is Effective for Darker Cars, Underexposure is Effective for Lighter Cars / 深色车身宜过曝，浅色车身宜欠曝
        </h3>

        <div className="bilingual">
          <p lang="en">
            The ‘exposure’ of a photograph refers to the amount of light that strikes the film or image sensor. This can be changed by adjusting the shutter speed and the aperture. Underexposure and overexposure are commonly used terms in photography, and respectively refer to allowing too little light to strike the film (making the image darker) or allowing too much light to strike the film (making things brighter).
          </p>
          <p lang="zh">
            将光记录到胶片或传感器上时，通过调节快门速度与光圈来控制光量，称为曝光调节。摄影常说的「欠曝」「过曝」，即曝光光量过少（偏暗）或过多（偏亮）。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1LkGmHxa9yPnSH} />
        </p>

        <div className="bilingual">
          <p lang="en">
            When taking photos, your initial aim should be to find the ‘correct exposure.' In other words, you should try to ensure that your subject is neither too bright nor too dark. However, this doesn’t mean that you will be forced to stick to that exposure once you’ve found it. Deliberately over- or under-exposing a subject can open up whole new worlds of possibility.
          </p>
          <p lang="zh">
            拍摄之初应追求「正确曝光」——想呈现的主体不过亮也不过暗。但正确曝光并非绝对；根据想表现的内容可以变化，大胆向欠曝或过曝方向调整，有时能打开全新的世界。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For example, let’s say you’re photographing a car that has a really beautiful highlighted line along its side. If you were to drop the exposure down so that the image becomes darker, the highlighted line would stand out even more, becoming the thematic centerpiece of the whole photograph.
          </p>
          <p lang="zh">
            例如拍摄某车时，车身侧面出现一条极美的高光线。将曝光大幅降低、画面大部分压暗，让那条高光从暗部浮现，作为作品主题，完全可以。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The ‘Scapes’ feature serves as a great tool for learning how to control exposure. Because it has such a huge latitude of brightness, ranging from very dark to very bright, you can see how varying degrees of exposure alter your compositions. And there are plenty of benefits to be had from mastering this technique. If you start out by experimenting with overexposure (making the image brighter) for darker cars and underexposure (making the image darker) for lighter cars, you’ll soon come to understand the effects for yourself.
          </p>
          <p lang="zh">
            学习曝光控制时，「景观」是非常好的工具。从暗部到亮部拥有极宽的明度信息（动态范围），能让作品产生戏剧性变化。为拓宽表现，建议掌握曝光调节。顺便说，向过曝（更亮）方向调整时选黑色车身，向欠曝（更暗）方向调整时选浅色车身，效果更易体会。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Talking about exposure always makes me think about the 1987 F1 Grand Prix in Brazil. It was the debut race for a Japanese driver called Satoru Nakajima, and I’d gone to the Jacarepaguá Circuit, as it was then known, to capture his first race on camera. Before the race started, it was a beautiful clear day and extremely bright. My light meter didn’t seem to reflect this, however. This was a bit worrying, but I decided to take my photos based on what the light meter said anyway. The photos turned out to be a bit overexposed. I finally realized that, in the southern hemisphere, even light that seems extremely bright to the human eye doesn’t register as such on light meters. That’s still a bit of a painful memory for me.
          </p>
          <p lang="zh">
            说到曝光，我想到的是 1987 年 F1 巴西大奖赛。那是日本车手中岛悟选手的首秀，我也在雅卡雷帕瓜赛道拍摄。赛前晴空万里，现场极亮。但（当时用胶片相机）看测光表几乎不动。犹豫之后仍依测光拍摄，结果成片略有过曝。南半球的光，人眼觉得极亮，测光表却几乎不反映——那时我才明白。至今仍是略带痛楚的回忆。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i14dQ72NeUrNxSH} />
        </p>

        <div className="bilingual">
          <p lang="en">
            I changed to a three-stage exposure and compared the reflections on the white body and the black body.
          </p>
          <p lang="zh">
            将曝光分三档比较白色车身与黑色车身的映像效果。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1UUYdz6wpUw7O} />
        </p>

        <div className="bilingual">
          <p lang="en">
            It is generally believed that overexposure helps to express the texture of a black car body.
          </p>
          <p lang="zh">
            一般认为，要表现黑色车身的质感，曝光宜略向过曝方向设置。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1JeCTJnUvQuv8c} />
        </p>

        <div className="bilingual">
          <p lang="en">
            With a white car body, even if the image is underexposed, the car’s sense of presence is not diminished.
          </p>
          <p lang="zh">
            白色车身即使欠曝，车辆的存在感也不会减弱。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Exposure;
