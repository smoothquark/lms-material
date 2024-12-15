/**
 * LMS-Material
 *
 * Copyright (c) 2018-2024 Craig Drummond <craig.p.drummond@gmail.com>
 * MIT license.
 */
'use strict';

var lmsOptions = {techInfo: getLocalStorageBool('techInfo', false),
                  conductorGenres: new Set(),
                  composerGenres: new Set(),
                  bandGenres: new Set(),
                  maiComposer: getLocalStorageBool('maiComposer', false),
                  showConductor: getLocalStorageBool('showConductor', false),
                  showComposer: getLocalStorageVal('showComposer', 1, true),
                  showBand: getLocalStorageBool('showBand', true),
                  volumeStep: parseInt(getLocalStorageVal('volumeStep', 5)),
                  respectFixedVol: getLocalStorageVal('respectFixedVol', VOL_FIXED),
                  showAllArtists: getLocalStorageBool('showAllArtists', true),
                  artistFirst: getLocalStorageBool('artistFirst', true),
                  allowDownload: IS_IOS ? false : getLocalStorageBool('allowDownload', false),
                  lang: undefined,
                  commentAsDiscTitle: getLocalStorageVal('commentAsDiscTitle', 0),
                  showComment: getLocalStorageBool('showComment', false),
                  pagedBatchSize: parseInt(getLocalStorageVal('pagedBatchSize', 100)),
                  noArtistFilter: getLocalStorageBool('noArtistFilter', true),
                  separateArtistsList: getLocalStorageBool('separateArtistsList', true),
                  supportReleaseTypes: LMS_DEF_SUPPORT_RELEASE_TYPES,
                  groupByReleaseType: LMS_DEF_GROUP_BY_RELEASE_TYPE,
                  releaseTypeOrder: undefined,
                  releaseTypes: {},
                  releaseAppearances: {},
                  genreImages: getLocalStorageBool('genreImages', false),
                  touchLinks: getLocalStorageBool('touchLinks', false),
                  yearInSub: getLocalStorageBool('yearInSub', true),
                  playShuffle: getLocalStorageBool('playShuffle', false),
                  time12hr: LMS_DEF_12HR,
                  listWorks: getLocalStorageBool('listWorks', false),
                  combineAppsAndRadio: getLocalStorageBool('combineAppsAndRadio', false),
                  hidePlayers: new Set(getLocalStorageVal('hidePlayers', '').split(',')),
                  screensaverTimeout: getLocalStorageVal('screensaverTimeout', 60),
                  npSwitchTimeout: getLocalStorageVal('npSwitchTimeout', 5*60),
                  userDefinedRoles: {},
                  excludedUserDefinedRoles: getLocalStorageVal('excludedUserDefinedRoles', '-'),
                  rolesInArtists: getLocalStorageVal('rolesInArtists', '-'),
                  randomMixDialogPinned: false,
                  showSubtitle: getLocalStorageBool('showSubtitle', false)
                };
