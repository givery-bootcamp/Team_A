/* tslint:disable */
/* eslint-disable */
/**
 * Simple User API
 * A simple API to retrieve user information.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface CreatePostRequest
 */
export interface CreatePostRequest {
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostRequest
     */
    'body': string;
    /**
     * 
     * @type {number}
     * @memberof CreatePostRequest
     */
    'user_id': number;
}
/**
 * 
 * @export
 * @interface CreatePostResponse
 */
export interface CreatePostResponse {
    /**
     * 
     * @type {number}
     * @memberof CreatePostResponse
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePostResponse
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostResponse
     */
    'body'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreatePostResponse
     */
    'user_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreatePostResponse
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreatePostResponse
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface GetHello200Response
 */
export interface GetHello200Response {
    /**
     * 
     * @type {string}
     * @memberof GetHello200Response
     */
    'lang'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetHello200Response
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface GetPostById404Response
 */
export interface GetPostById404Response {
    /**
     * 
     * @type {string}
     * @memberof GetPostById404Response
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {number}
     * @memberof Post
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'body': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'userName': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @interface SignUpRequest
 */
export interface SignUpRequest {
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface UpdatePostRequest
 */
export interface UpdatePostRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdatePostRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePostRequest
     */
    'body': string;
}
/**
 * 
 * @export
 * @interface UpdatePostResponse
 */
export interface UpdatePostResponse {
    /**
     * 
     * @type {number}
     * @memberof UpdatePostResponse
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof UpdatePostResponse
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePostResponse
     */
    'body': string;
    /**
     * 
     * @type {number}
     * @memberof UpdatePostResponse
     */
    'user_id': number;
    /**
     * 
     * @type {string}
     * @memberof UpdatePostResponse
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePostResponse
     */
    'updatedAt': string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'updatedAt'?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a simple hello message.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHello: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hello`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a simple hello message.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHello(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetHello200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHello(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.getHello']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Returns a simple hello message.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHello(options?: any): AxiosPromise<GetHello200Response> {
            return localVarFp.getHello(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Returns a simple hello message.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getHello(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getHello(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * PostApi - axios parameter creator
 * @export
 */
export const PostApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve all posts.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPosts: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve post information by ID.
         * @summary 
         * @param {number} postId The unique identifier of the post.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostById: async (postId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'postId' is not null or undefined
            assertParamExists('getPostById', 'postId', postId)
            const localVarPath = `/posts/{postId}`
                .replace(`{${"postId"}}`, encodeURIComponent(String(postId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new post.
         * @summary 
         * @param {CreatePostRequest} createPostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPost: async (createPostRequest: CreatePostRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPostRequest' is not null or undefined
            assertParamExists('postPost', 'createPostRequest', createPostRequest)
            const localVarPath = `/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a post by ID.
         * @summary 
         * @param {number} postId The unique identifier of the post.
         * @param {UpdatePostRequest} updatePostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putPost: async (postId: number, updatePostRequest: UpdatePostRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'postId' is not null or undefined
            assertParamExists('putPost', 'postId', postId)
            // verify required parameter 'updatePostRequest' is not null or undefined
            assertParamExists('putPost', 'updatePostRequest', updatePostRequest)
            const localVarPath = `/posts/{postId}`
                .replace(`{${"postId"}}`, encodeURIComponent(String(postId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updatePostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PostApi - functional programming interface
 * @export
 */
export const PostApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PostApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve all posts.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllPosts(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Post>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPosts(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostApi.getAllPosts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieve post information by ID.
         * @summary 
         * @param {number} postId The unique identifier of the post.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPostById(postId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPostById(postId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostApi.getPostById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Create a new post.
         * @summary 
         * @param {CreatePostRequest} createPostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPost(createPostRequest: CreatePostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatePostResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postPost(createPostRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostApi.postPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update a post by ID.
         * @summary 
         * @param {number} postId The unique identifier of the post.
         * @param {UpdatePostRequest} updatePostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putPost(postId: number, updatePostRequest: UpdatePostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdatePostResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putPost(postId, updatePostRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PostApi.putPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PostApi - factory interface
 * @export
 */
export const PostApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PostApiFp(configuration)
    return {
        /**
         * Retrieve all posts.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPosts(options?: any): AxiosPromise<Array<Post>> {
            return localVarFp.getAllPosts(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve post information by ID.
         * @summary 
         * @param {number} postId The unique identifier of the post.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPostById(postId: number, options?: any): AxiosPromise<Post> {
            return localVarFp.getPostById(postId, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new post.
         * @summary 
         * @param {CreatePostRequest} createPostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPost(createPostRequest: CreatePostRequest, options?: any): AxiosPromise<CreatePostResponse> {
            return localVarFp.postPost(createPostRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a post by ID.
         * @summary 
         * @param {number} postId The unique identifier of the post.
         * @param {UpdatePostRequest} updatePostRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putPost(postId: number, updatePostRequest: UpdatePostRequest, options?: any): AxiosPromise<UpdatePostResponse> {
            return localVarFp.putPost(postId, updatePostRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PostApi - object-oriented interface
 * @export
 * @class PostApi
 * @extends {BaseAPI}
 */
export class PostApi extends BaseAPI {
    /**
     * Retrieve all posts.
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    public getAllPosts(options?: RawAxiosRequestConfig) {
        return PostApiFp(this.configuration).getAllPosts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve post information by ID.
     * @summary 
     * @param {number} postId The unique identifier of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    public getPostById(postId: number, options?: RawAxiosRequestConfig) {
        return PostApiFp(this.configuration).getPostById(postId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new post.
     * @summary 
     * @param {CreatePostRequest} createPostRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    public postPost(createPostRequest: CreatePostRequest, options?: RawAxiosRequestConfig) {
        return PostApiFp(this.configuration).postPost(createPostRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a post by ID.
     * @summary 
     * @param {number} postId The unique identifier of the post.
     * @param {UpdatePostRequest} updatePostRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostApi
     */
    public putPost(postId: number, updatePostRequest: UpdatePostRequest, options?: RawAxiosRequestConfig) {
        return PostApiFp(this.configuration).putPost(postId, updatePostRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve the current session user.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionUser: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/session_user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sign in to the application.
         * @summary 
         * @param {SignUpRequest} signUpRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signIn: async (signUpRequest: SignUpRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signUpRequest' is not null or undefined
            assertParamExists('signIn', 'signUpRequest', signUpRequest)
            const localVarPath = `/signin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signUpRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sign out of the application.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signOut: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/signout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new user.
         * @summary 
         * @param {SignUpRequest} signUpRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signUp: async (signUpRequest: SignUpRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'signUpRequest' is not null or undefined
            assertParamExists('signUp', 'signUpRequest', signUpRequest)
            const localVarPath = `/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signUpRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve the current session user.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSessionUser(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSessionUser(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.getSessionUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sign in to the application.
         * @summary 
         * @param {SignUpRequest} signUpRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signIn(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signIn(signUpRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.signIn']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sign out of the application.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signOut(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetPostById404Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signOut(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.signOut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Create a new user.
         * @summary 
         * @param {SignUpRequest} signUpRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signUp(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signUp(signUpRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UserApi.signUp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Retrieve the current session user.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionUser(options?: any): AxiosPromise<User> {
            return localVarFp.getSessionUser(options).then((request) => request(axios, basePath));
        },
        /**
         * Sign in to the application.
         * @summary 
         * @param {SignUpRequest} signUpRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signIn(signUpRequest: SignUpRequest, options?: any): AxiosPromise<User> {
            return localVarFp.signIn(signUpRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Sign out of the application.
         * @summary 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signOut(options?: any): AxiosPromise<GetPostById404Response> {
            return localVarFp.signOut(options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new user.
         * @summary 
         * @param {SignUpRequest} signUpRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signUp(signUpRequest: SignUpRequest, options?: any): AxiosPromise<User> {
            return localVarFp.signUp(signUpRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * Retrieve the current session user.
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getSessionUser(options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).getSessionUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sign in to the application.
     * @summary 
     * @param {SignUpRequest} signUpRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public signIn(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).signIn(signUpRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sign out of the application.
     * @summary 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public signOut(options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).signOut(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new user.
     * @summary 
     * @param {SignUpRequest} signUpRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public signUp(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig) {
        return UserApiFp(this.configuration).signUp(signUpRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



