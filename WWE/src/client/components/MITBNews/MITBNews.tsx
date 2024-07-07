import { useState } from 'react';
import MITBLogo from '../../assets/MITB_logo.png';
import playButton from '../../assets/play_button.svg';
import OutsideNavLink from '../OutsideNavLink/OutsideNavLink';
import styles from './MITBNews.module.scss';

export default function MITBNews() {
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    const handleVideoClick = (videoId: string) => {
        setPlayingVideoId(videoId);
    };

    return (
        <div className={styles.mitb}>
                <div className={styles.results}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <img src={MITBLogo} alt="WWE MITB" />
                        </div>
                        <div className={styles.social}>
                            <OutsideNavLink to='https://www.facebook.com/wwe' className={styles.facebook}><i className="fab fa-facebook"></i></OutsideNavLink>
                            <OutsideNavLink to='https://twitter.com/WWE' className={styles.twitter}><i className="fab fa-twitter"></i></OutsideNavLink>
                        </div>
                    </div>

                    <div className={styles.mainImage}>
                        <img src="https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2024/07/194_MITB_07062024EJ_16445--6301273ec1403cd1168808b8b345f7ed.jpg" alt="main" />
                    </div>
                    <div className={styles.mainText}>
                        <div className={styles.headline}>MONEY IN THE BANK RESULTS FOR 7/6</div>
                        <h1>Solo Sikoa pins Cody Rhodes as The Bloodline wins at Money in the Bank</h1>
                        <div className={styles.buttons}>
                            <OutsideNavLink to='http://www.wwe.com/shows/moneyinthebank/2024' className={styles.button}>Results</OutsideNavLink>
                            <OutsideNavLink to='http://www.wwe.com/playlist/wwe-money-in-the-bank-2024-highlights' className={styles.button}>Watch Highlights</OutsideNavLink>
                        </div>
                    </div>
                </div>
                
                <div className={styles.videos}>
                    <div className={`${styles.video} ${playingVideoId === 'video1' ? styles.videoPlaying : ''}`} onClick={() => handleVideoClick('video1')}>
                        {playingVideoId !== 'video1' ? (
                            <>
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/07/dchimitb2024_10_ntwk--94732ff4884e9393e043a264a82f5e57.jpg" alt="vid 1" />
                                <div className={styles.overlay}>
                                    <span>01:47</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>CM Punk AMBUSHES Drew McIntyre during cash-in</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/kw7ekmGEwgc"
                                title="CM Punk AMBUSHES Drew McIntyre during Money in the Bank cash-in: Money in the Bank 2024 highlights"
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
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/07/dchimitb2024_13_ntwk--fbbd95926d359c224be5b3164d0bdb4b.jpg" alt="vid 2" />
                                <div className={styles.overlay}>
                                    <span>01:24</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>Tiffany Stratton is Ms. Money in the Bank</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/ffddzEBVWQw"
                                title="Tiffany Stratton is Ms. Money in the Bank: Money in the Bank 2024 highlights"
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
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/07/dchimitb2024_06_ntwk_rev_1--fbe1e66a23f88e77679f0c4c6e3a90f8.jpg" alt="vid 3" />
                                <div className={styles.overlay}>
                                    <span>04:39</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>Zayn vs. Breakker — Intercontinental Title</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/lsbn0stGLsc"
                                title="Sami Zayn vs. Bron Breakker — Intercontinental Title: Money in the Bank 2024 highlights"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
    );
}