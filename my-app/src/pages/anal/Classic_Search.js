import "./style/ClassicTable.css";
import { useLocation } from "react-router-dom";
import championData from "./json/bronze.json";

const Classic_Search = () => {
  const location = useLocation();

  const championImageUrl =
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/Akali.png";
  const summonerspell =
    "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/spell/SummonerFlash.png";
  const item =
    "http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/6672.png";
  const cursor = "https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg";
  const skillImageUrl =
    "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliQ.png?image=q_auto,f_webp,w_64&v=1696570752446";
  const skillImageUrl2 =
    "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliW.png?image=q_auto,f_webp,w_64&v=1696570752446";
  const skillImageUrl3 =
    "https://opgg-static.akamaized.net/meta/images/lol/spell/AkaliE.png?image=q_auto,f_webp,w_64&v=1696570752446";
  const perkFirst =
    "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png";
  const perkSecond =
    "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png";

  // 앞자리를 대문자로 추출하는 함수.
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const searchText1 = capitalizeFirstLetter(location.state.searchText1);
  console.log(searchText1);
  // ""인 데이터를 추출
  const filteredChampionData = championData.filter((champion) => {
    return champion.championName === (searchText1);
  });
  console.log(filteredChampionData);

  // 필터된 데이터를 콘솔에 출력
  console.log(location);

  return (
    <div>
      <main className="main-123">
        <div className="classic-table">
          <img src={championImageUrl} alt="champimg" className="champ-image" />

          <div className="champ-name">{searchText1}</div>
        </div>

        <div className="rate-table">
          <div className="rate">승률</div>

          <div className="rate">픽률</div>

          <div className="rate">밴율</div>
        </div>

        <div className="rate-table">
          <div className="percent-table">50%</div>

          <div className="percent-table">50%</div>

          <div className="percent-table">50%</div>
        </div>

        <div className="rate-table">
          <div className="skilltreename">스킬트리</div>
        </div>
        <div className="rate-table">
          <img src={skillImageUrl} alt="champimg" className="image-all" />
          <img src={cursor} alt="champimg" className="image-all" />
          <img src={skillImageUrl3} alt="champimg" className="image-all" />
          <img src={cursor} alt="champimg" className="image-all" />
          <img src={skillImageUrl2} alt="champimg" className="image-all" />
        </div>

        <div className="rate-table">
          <div className="skill-tree123">Q</div>
          <img src={cursor} alt="champimg" className="image-all" />
          <div className="skill-tree123">E</div>
          <img src={cursor} alt="champimg" className="image-all" />
          <div className="skill-tree123">W</div>
        </div>

        <div className="rune-table">
          <div className="runetable-left">
            <div className="rune-name">룬페이지</div>
            <div className="rune-page">
              <div className="rune-page-perk1">
                <div className="rune-row-top">
                  <img src={perkFirst} alt="rune" className="rune-image" />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img src={perkSecond} alt="rune" className="rune-image" />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                    alt="rune"
                    className="rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
              </div>
              <div className="rune-page-perk1">
                <div className="rune-row-top2">
                  <img src={summonerspell} alt="rune" className="rune-image" />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img src={summonerspell} alt="rune" className="rune-image" />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
              </div>

              <div className="rune-page-perk1-end">
                <div className="rune-row-top3">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
                <div className="rune-row">
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                  <img
                    src={summonerspell}
                    alt="rune"
                    className="disable-rune-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="runetable-right">
            <div className="runetable-1">
              소환사 주문
              <div>
                <img src={summonerspell} alt="spell" className="image-all" />
                <img src={summonerspell} alt="spell" className="image-all" />

                <div className="win-rate">승률:60%</div>
              </div>
            </div>
            <div className="runetable-1">
              시작 아이템
              <div>
                <img src={item} alt="shoes" className="image-all" />
                <img src={item} alt="shoes" className="image-all" />

                <div className="win-rate">승률:60%</div>
              </div>
            </div>
            <div className="runetable-1">
              신발
              <div>
                <img src={item} alt="shoes" className="image-all" />

                <div className="win-rate">승률:60%</div>
              </div>
            </div>
            <div className="runetable-end">
              메인 아이템 빌드
              <div>
                <img src={item} alt="shoes" className="image-all" />
                <img src={cursor} alt="cursor" className="image-all" />
                <img src={item} alt="shoes" className="image-all" />
                <div className="win-rate">승률:60%</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Classic_Search;
