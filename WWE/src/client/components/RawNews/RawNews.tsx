import { useState } from 'react';
import rawLogo from '../../assets/raw_logo.png';
import playButton from '../../assets/play_button.svg';
import OutsideNavLink from '../OutsideNavLink/OutsideNavLink';
import styles from './RawNews.module.scss';

export default function RawNews() {
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    const handleVideoClick = (videoId: string) => {
        setPlayingVideoId(videoId);
    };

    return (
        <div className={styles.raw}>
                <div className={styles.results}>
                    <div className={styles.header}>
                        <div className={styles.logo}>
                            <img src={rawLogo} alt="WWE Raw" />
                        </div>
                        <div className={styles.social}>
                            <OutsideNavLink to='https://www.facebook.com/WWERaw' className={styles.facebook}><i className="fab fa-facebook"></i></OutsideNavLink>
                            <OutsideNavLink to='https://x.com/USANetwork' className={styles.twitter}><i className="fab fa-twitter"></i></OutsideNavLink>
                        </div>
                    </div>

                    <div className={styles.mainImage}>
                        <img src="https://www.wwe.com/f/styles/wwe_16_9_xl/public/all/2024/07/20240701_RAW_drew--a0e2c42c3e959ed9c5b7a5b55a5757eb.jpg" alt="main" />
                    </div>
                    <div className={styles.mainText}>
                        <div className={styles.headline}>RAW RESULTS FOR 7/1</div>
                        <h1>Drew McIntyre qualifies for Money in the Bank</h1>
                        <div className={styles.buttons}>
                            <OutsideNavLink to='https://www.wwe.com/shows/raw/2024-07-01' className={styles.button}>Results</OutsideNavLink>
                            <OutsideNavLink to='https://www.wwe.com/playlist/raw-highlights-july-1-2024' className={styles.button}>Watch Highlights</OutsideNavLink>
                        </div>
                    </div>
                </div>
                
                <div className={styles.videos}>
                    <div className={`${styles.video} ${playingVideoId === 'video1' ? styles.videoPlaying : ''}`} onClick={() => handleVideoClick('video1')}>
                        {playingVideoId !== 'video1' ? (
                            <>
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/07/dchiraw1623_04_ntwk_rev_1--f3bc4cc93bacc0fdb3de1b6300b71578.jpg" alt="Dirty Dom's disruption helps Liv Morgan" />
                                <div className={styles.overlay}>
                                    <span>02:57</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>"Dirty" Dom's disruption helps Liv Morgan</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/AmXD609kPAY"
                                title="Dominik Mysterio’s disruption allows Liv Morgan to retain her title: Raw highlights, July 1, 2024"
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
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/07/dchiraw1623_05_ntwk_rev_1--7ab5df493f47dc53030542f422faec04.jpg" alt="Damian Priest chokeslams Seth Rollins" />
                                <div className={styles.overlay}>
                                    <span>02:59</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>Damian Priest chokeslams Seth Rollins</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/TfngpO6X13o"
                                title="Damian Priest chokeslams Seth Rollins after Finn Bálor interference brings chaos: Raw, July 1, 2024"
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
                                <img src="https://www.wwe.com/f/styles/wwe_16_9_l/public/2024/07/dchiraw1623_07_ntwk_rev_1--ea5cfead1f4b460e5e9999c0f685c186.jpg" alt="Bo Dallas to Uncle Howdy: 'I set them free'" />
                                <div className={styles.overlay}>
                                    <span>04:59</span>
                                    <button className={styles.playButton}><img src={playButton} /></button>
                                </div>
                                <p>Bo Dallas to Uncle Howdy: "I set them free</p>
                            </>
                        ) : (
                            <iframe
                                width="720"
                                height="405"
                                src="https://www.youtube.com/embed/Mf3m2ueoMWQ"
                                title="Bo Dallas to Uncle Howdy: &quot;I set them free”: Raw highlights, July 1, 2024"
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