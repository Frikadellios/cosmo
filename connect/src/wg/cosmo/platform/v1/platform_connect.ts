// https://protobuf.dev/programming-guides/style/

// @generated by protoc-gen-connect-es v0.13.2 with parameter "target=ts"
// @generated from file wg/cosmo/platform/v1/platform.proto (package wg.cosmo.platform.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CheckFederatedGraphRequest, CheckFederatedGraphResponse, CheckSubgraphSchemaRequest, CheckSubgraphSchemaResponse, CreateAPIKeyRequest, CreateAPIKeyResponse, CreateFederatedGraphRequest, CreateFederatedGraphResponse, CreateFederatedGraphTokenRequest, CreateFederatedGraphTokenResponse, CreateFederatedSubgraphRequest, CreateFederatedSubgraphResponse, CreateOrganizationWebhookConfigRequest, CreateOrganizationWebhookConfigResponse, DeleteAPIKeyRequest, DeleteAPIKeyResponse, DeleteFederatedGraphRequest, DeleteFederatedGraphResponse, DeleteFederatedSubgraphRequest, DeleteFederatedSubgraphResponse, DeleteOrganizationWebhookConfigRequest, DeleteOrganizationWebhookConfigResponse, FixSubgraphSchemaRequest, FixSubgraphSchemaResponse, GetAnalyticsViewRequest, GetAnalyticsViewResponse, GetAPIKeysRequest, GetAPIKeysResponse, GetCheckDetailsRequest, GetCheckDetailsResponse, GetChecksByFederatedGraphNameRequest, GetChecksByFederatedGraphNameResponse, GetDashboardAnalyticsViewRequest, GetDashboardAnalyticsViewResponse, GetFederatedGraphByNameRequest, GetFederatedGraphByNameResponse, GetFederatedGraphChangelogRequest, GetFederatedGraphChangelogResponse, GetFederatedGraphSDLByNameRequest, GetFederatedGraphSDLByNameResponse, GetFederatedGraphsRequest, GetFederatedGraphsResponse, GetFederatedSubgraphSDLByNameRequest, GetFederatedSubgraphSDLByNameResponse, GetOrganizationMembersRequest, GetOrganizationMembersResponse, GetOrganizationWebhookConfigsRequest, GetOrganizationWebhookConfigsResponse, GetSubgraphByNameRequest, GetSubgraphByNameResponse, GetSubgraphsRequest, GetSubgraphsResponse, GetTraceRequest, GetTraceResponse, InviteUserRequest, InviteUserResponse, MigrateFromApolloRequest, MigrateFromApolloResponse, PublishFederatedSubgraphRequest, PublishFederatedSubgraphResponse, RemoveInvitationRequest, RemoveInvitationResponse, UpdateFederatedGraphRequest, UpdateFederatedGraphResponse, UpdateOrganizationWebhookConfigRequest, UpdateOrganizationWebhookConfigResponse, UpdateSubgraphRequest, UpdateSubgraphResponse, WhoAmIRequest, WhoAmIResponse } from "./platform_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { GetConfigRequest, GetConfigResponse } from "../../node/v1/node_pb.js";

/**
 * @generated from service wg.cosmo.platform.v1.PlatformService
 */
export const PlatformService = {
  typeName: "wg.cosmo.platform.v1.PlatformService",
  methods: {
    /**
     * CreateFederatedGraph creates a federated graph on the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateFederatedGraph
     */
    createFederatedGraph: {
      name: "CreateFederatedGraph",
      I: CreateFederatedGraphRequest,
      O: CreateFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFederatedSubgraph creates a federated subgraph on the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateFederatedSubgraph
     */
    createFederatedSubgraph: {
      name: "CreateFederatedSubgraph",
      I: CreateFederatedSubgraphRequest,
      O: CreateFederatedSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * PublishFederatedSubgraph pushes the schema of the subgraph to the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.PublishFederatedSubgraph
     */
    publishFederatedSubgraph: {
      name: "PublishFederatedSubgraph",
      I: PublishFederatedSubgraphRequest,
      O: PublishFederatedSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteFederatedGraph deletes a federated graph from the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteFederatedGraph
     */
    deleteFederatedGraph: {
      name: "DeleteFederatedGraph",
      I: DeleteFederatedGraphRequest,
      O: DeleteFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteFederatedSubgraph deletes a federated subgraph from the control plane.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteFederatedSubgraph
     */
    deleteFederatedSubgraph: {
      name: "DeleteFederatedSubgraph",
      I: DeleteFederatedSubgraphRequest,
      O: DeleteFederatedSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CheckSubgraphSchema checks if the schema is valid and if it can be composed without conflicts with the provided new subgraph schema.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CheckSubgraphSchema
     */
    checkSubgraphSchema: {
      name: "CheckSubgraphSchema",
      I: CheckSubgraphSchemaRequest,
      O: CheckSubgraphSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.FixSubgraphSchema
     */
    fixSubgraphSchema: {
      name: "FixSubgraphSchema",
      I: FixSubgraphSchemaRequest,
      O: FixSubgraphSchemaResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateFederatedGraph updates a federated graph with new labels and routing url
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateFederatedGraph
     */
    updateFederatedGraph: {
      name: "UpdateFederatedGraph",
      I: UpdateFederatedGraphRequest,
      O: UpdateFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateSubgraph updates a subgraph with new labels and routing url
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateSubgraph
     */
    updateSubgraph: {
      name: "UpdateSubgraph",
      I: UpdateSubgraphRequest,
      O: UpdateSubgraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CheckFederatedGraph checks if the federated graph can be composed with the new labels provided.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CheckFederatedGraph
     */
    checkFederatedGraph: {
      name: "CheckFederatedGraph",
      I: CheckFederatedGraphRequest,
      O: CheckFederatedGraphResponse,
      kind: MethodKind.Unary,
    },
    /**
     * WhoAmI returns the identity of the user currently logged in.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.WhoAmI
     */
    whoAmI: {
      name: "WhoAmI",
      I: WhoAmIRequest,
      O: WhoAmIResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphs returns the list of federated graphs.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphs
     */
    getFederatedGraphs: {
      name: "GetFederatedGraphs",
      I: GetFederatedGraphsRequest,
      O: GetFederatedGraphsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphByName returns the federated graph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphByName
     */
    getFederatedGraphByName: {
      name: "GetFederatedGraphByName",
      I: GetFederatedGraphByNameRequest,
      O: GetFederatedGraphByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphSDLByName returns the SDL of the federated graph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphSDLByName
     */
    getFederatedGraphSDLByName: {
      name: "GetFederatedGraphSDLByName",
      I: GetFederatedGraphSDLByNameRequest,
      O: GetFederatedGraphSDLByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSubgraphs returns the list of subgraphs.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetSubgraphs
     */
    getSubgraphs: {
      name: "GetSubgraphs",
      I: GetSubgraphsRequest,
      O: GetSubgraphsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSubgraphByName returns the subgraph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetSubgraphByName
     */
    getSubgraphByName: {
      name: "GetSubgraphByName",
      I: GetSubgraphByNameRequest,
      O: GetSubgraphByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedSubgraphSDLByName returns the SDL of the subgraph by name.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedSubgraphSDLByName
     */
    getFederatedSubgraphSDLByName: {
      name: "GetFederatedSubgraphSDLByName",
      I: GetFederatedSubgraphSDLByNameRequest,
      O: GetFederatedSubgraphSDLByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetChecksByFederatedGraphName return schema and composition checks that concern a federated graph
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetChecksByFederatedGraphName
     */
    getChecksByFederatedGraphName: {
      name: "GetChecksByFederatedGraphName",
      I: GetChecksByFederatedGraphNameRequest,
      O: GetChecksByFederatedGraphNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetCheckDetails returns changes and composition errors recorded for a check
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetCheckDetails
     */
    getCheckDetails: {
      name: "GetCheckDetails",
      I: GetCheckDetailsRequest,
      O: GetCheckDetailsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFederatedGraphChangelog returns the changelog of the federated graph.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetFederatedGraphChangelog
     */
    getFederatedGraphChangelog: {
      name: "GetFederatedGraphChangelog",
      I: GetFederatedGraphChangelogRequest,
      O: GetFederatedGraphChangelogResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFederatedGraphToken creates a federated graph token that is consumed by the router to authenticate requests.
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateFederatedGraphToken
     */
    createFederatedGraphToken: {
      name: "CreateFederatedGraphToken",
      I: CreateFederatedGraphTokenRequest,
      O: CreateFederatedGraphTokenResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationMembers returns the list of organization members
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOrganizationMembers
     */
    getOrganizationMembers: {
      name: "GetOrganizationMembers",
      I: GetOrganizationMembersRequest,
      O: GetOrganizationMembersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InviteUser invites an user to join the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.InviteUser
     */
    inviteUser: {
      name: "InviteUser",
      I: InviteUserRequest,
      O: InviteUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetAPIKeys returns a list of API keys of the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetAPIKeys
     */
    getAPIKeys: {
      name: "GetAPIKeys",
      I: GetAPIKeysRequest,
      O: GetAPIKeysResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateAPIKey creates an API key for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateAPIKey
     */
    createAPIKey: {
      name: "CreateAPIKey",
      I: CreateAPIKeyRequest,
      O: CreateAPIKeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteAPIKey deletes an API key for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteAPIKey
     */
    deleteAPIKey: {
      name: "DeleteAPIKey",
      I: DeleteAPIKeyRequest,
      O: DeleteAPIKeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RemoveOrganizationMember removes the user from the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.RemoveInvitation
     */
    removeInvitation: {
      name: "RemoveInvitation",
      I: RemoveInvitationRequest,
      O: RemoveInvitationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetLatestValidRouterConfig returns the router config for the federated graph
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetLatestValidRouterConfig
     */
    getLatestValidRouterConfig: {
      name: "GetLatestValidRouterConfig",
      I: GetConfigRequest,
      O: GetConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * MigrateFromApollo migrates the graphs from apollo to cosmo
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.MigrateFromApollo
     */
    migrateFromApollo: {
      name: "MigrateFromApollo",
      I: MigrateFromApolloRequest,
      O: MigrateFromApolloResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateOrganizationWebhookConfig create a new webhook config for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.CreateOrganizationWebhookConfig
     */
    createOrganizationWebhookConfig: {
      name: "CreateOrganizationWebhookConfig",
      I: CreateOrganizationWebhookConfigRequest,
      O: CreateOrganizationWebhookConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationWebhookConfigs returns all webhooks for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetOrganizationWebhookConfigs
     */
    getOrganizationWebhookConfigs: {
      name: "GetOrganizationWebhookConfigs",
      I: GetOrganizationWebhookConfigsRequest,
      O: GetOrganizationWebhookConfigsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateOrganizationWebhookConfig updates an existing webhook for the organization
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.UpdateOrganizationWebhookConfig
     */
    updateOrganizationWebhookConfig: {
      name: "UpdateOrganizationWebhookConfig",
      I: UpdateOrganizationWebhookConfigRequest,
      O: UpdateOrganizationWebhookConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteOrganizationWebhookConfig deletes an organization webhook
     *
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.DeleteOrganizationWebhookConfig
     */
    deleteOrganizationWebhookConfig: {
      name: "DeleteOrganizationWebhookConfig",
      I: DeleteOrganizationWebhookConfigRequest,
      O: DeleteOrganizationWebhookConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetAnalyticsView
     */
    getAnalyticsView: {
      name: "GetAnalyticsView",
      I: GetAnalyticsViewRequest,
      O: GetAnalyticsViewResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetDashboardAnalyticsView
     */
    getDashboardAnalyticsView: {
      name: "GetDashboardAnalyticsView",
      I: GetDashboardAnalyticsViewRequest,
      O: GetDashboardAnalyticsViewResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wg.cosmo.platform.v1.PlatformService.GetTrace
     */
    getTrace: {
      name: "GetTrace",
      I: GetTraceRequest,
      O: GetTraceResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

