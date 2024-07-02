import { useState } from 'react';
import smackdownLogo from '../../assets/smackdown_logo.png';
import playButton from '../../assets/play_button.svg';
import OutsideNavLink from '../OutsideNavLink/OutsideNavLink';
import styles from './SmackdownNews.module.scss';

export default function SmackdownNews() {
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    const handleVideoClick = (videoId: string) => {
        setPlayingVideoId(videoId);
    };

    return (
        <div className={styles.smackdown}>
                <div className={styles.results}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <img src={smackdownLogo} alt="WWE smackdown" />
                        </div>
                        <div className={styles.social}>
                            <OutsideNavLink to='https://www.facebook.com/WWEsmackdown' className={styles.facebook}><i className="fab fa-facebook"></i></OutsideNavLink>
                            <OutsideNavLink to='https://x.com/WWEonFOX' className={styles.twitter}><i className="fab fa-twitter"></i></OutsideNavLink>
                        </div>
                    </div>

                    <div className={styles.mainImage}>
                        <img src="https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2024/06/064_SD_06282024HM_19381--e4798f1eff4f2c6fa506272207057482.jpg" alt="main" />
                    </div>
                    <div className={styles.mainText}>
                        <div className={styles.headline}>SMACKDOWN RESULTS FOR 6/28</div>
                        <h1>The Bloodline hospitalizes Paul Heyman after The Wiseman refuses to ackno...</h1>
                        <div className={styles.buttons}>
                            <OutsideNavLink to='https://www.wwe.com/shows/smackdown/2024-06-28' className={styles.button}>Results</OutsideNavLink>
                            <OutsideNavLink to='https://www.wwe.com/playlist/smackdown-highlights-june-28-2024' className={styles.button}>Watch Highlights</OutsideNavLink>
                        </div>
                    </div>
                </div>
                
                <div className={styles.videos}>
                    <div className={`${styles.video} ${playingVideoId === 'video1' ? styles.videoPlaying : ''}`} onClick={() => handleVideoClick('video1')}>
                        {playingVideoId !== 'video1' ? (
                            <>
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/06/dchisd1297_03_ntwk_rev_1--43583c03e136f4954a6dacfe5e68d44e.jpg" alt="vid1" />
                                <div className={styles.overlay}>
                                    <span>03:06</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>Tiffany Stratton qualifies for Money in the Bank</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/og2HfVbVD7Q"
                                title="Tiffany Stratton qualifies for Money in the Bank: SmackDown highlights, June 28, 2024"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                    <div className={`${styles.video} ${playingVideoId === 'video2' ? styles.videoPlaying : ''}`} onClick={() => handleVideoClick('video2')}>
                        {playingVideoId !== 'video2' ? (
                            <>
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/06/dchisd1297_10_ntwk--5dc062683d9a9f1c323d932019ca3bfa.jpg" alt="vid2" />
                                <div className={styles.overlay}>
                                    <span>03:15</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>Jalen Brunson and Tyrese Haliburton square off at SmackDown</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/R8glzO2QHRA"
                                title="Jalen Brunson and Tyrese Haliburton square off at SmackDown: SmackDown highlights, June 28, 2024"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                    <div className={`${styles.video} ${playingVideoId === 'video3' ? styles.videoPlaying : ''}`} onClick={() => handleVideoClick('video3')}>
                        {playingVideoId !== 'video3' ? (
                            <>
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/06/dchisd1297_02_ntwk--736862d6a19bae76d4803b7b6f40c8f7.jpg" alt="vid3" />
                                <div className={styles.overlay}>
                                    <span>03:08</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>The NYPD escorts Cody Rhodes, Randy Orton and Kevin Owens out</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/lAuZX0OQylI"
                                title="The NYPD escorts Cody Rhodes, Randy Orton and Kevin Owens out: SmackDown highlights, June 28, 2024"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
    )
}